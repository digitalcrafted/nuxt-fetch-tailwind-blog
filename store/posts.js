function initialState() {
  return {
    posts: [],
    pages: {
      current_page: null,
      first_page_url: null,
      last_page: null,
      last_page_url: null,
      next_page_url: null,
      per_page: 2,
      prev_page_url: null,
      total: null
    }
  }
}

export const state = () => ({
  posts: initialState().posts,
  pages: initialState().pages
})
export const actions = {
  async fetchPosts({ commit, dispatch }, options) {
    try {
      const page = options.page || 1
      await this.$axios.$get('posts.json').then((response) => {
        commit('setPosts', response)
        commit('setPages', {page, posts: response})
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}
export const mutations = {
  setPosts(state, posts) {
    state.posts = []
    state.posts = posts
  },
  setPages(state, data) {
    state.pages.current_page = data.page
    state.pages.first_page_url = 1
    state.pages.last_page = Math.ceil(data.posts.length / state.pages.per_page)
    state.pages.next_page_url = data.page < Math.ceil(data.posts.length / state.pages.per_page) ? data.page + 1 : null
    state.pages.prev_page_url = (Math.ceil(data.posts.length / state.pages.per_page) > data.page) &&  (data.page !== state.pages.first_page_url) ? data.page - 1 : null
    state.posts.total = data.posts.length
  },
  resetStateData(state) {
    const newState = initialState()
    Object.assign(state, newState)
  }
}
export const getters = {
  getPosts(state) {
    return state.posts
  }
}
