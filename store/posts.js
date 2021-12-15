function initialState () {
  return {
    posts: [],
    pages: {
      current_page: null,
      first_page_url: null,
      last_page: null,
      last_page_url: null,
      next_page_url: null,
      per_page: 3,
      prev_page_url: null,
      total: null
    },
    post: {
      id: null,
      title: null,
      post: null,
      summary: null,
      image: null,
      created_at: null
    }
  }
}

export const state = () => ({
  posts: initialState().posts,
  pages: initialState().pages,
  post: initialState().post
})
export const actions = {
  async fetchPosts ({commit, dispatch}, options) {
    try {
      const page = options.page || 1
      await fetch('posts.json').then(async response => {
        const data = await response.json()
        commit('setPosts', {page, posts: data})
        commit('setPages', {page, posts: data})
        // check for error response
        if (!data.length) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText
          return Promise.reject(error)
        }
      })
    } catch (e) {
      console.log(e.message)
    }
  },
  async fetchPost ({commit, dispatch}, options) {
    try {
      const id = options.id
      await fetch('posts.json').then(async response => {
        const data = await response.json()
        commit('setPost', {id, posts: data})
        // check for error response
        if (!data.length) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText
          return Promise.reject(error)
        }
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}
export const mutations = {
  setPosts (state, data) {
    const page = data.page
    const posts = data.posts
    state.posts = []
    /*prevent array mutation by cloning the array*/
    state.posts = [...data.posts].splice(((page - 1) * state.pages.per_page), state.pages.per_page)
  },
  setPost (state, data) {
    const id = Number(data.id)
    const posts = data.posts
    state.post = initialState().post
    posts.filter((post) => {
      if (post.id === id) {
        state.post = JSON.parse(JSON.stringify(post))
      }
    })
  },
  setPages (state, data) {
    state.pages = initialState().pages
    state.pages.current_page = data.page
    state.pages.first_page_url = 1
    state.pages.last_page = Math.ceil(data.posts.length / state.pages.per_page)
    state.pages.next_page_url = data.page < Math.ceil(data.posts.length / state.pages.per_page) ? data.page + 1 : null
    state.pages.prev_page_url = (Math.ceil(data.posts.length / state.pages.per_page) > data.page) && (data.page !== state.pages.first_page_url) ? data.page - 1 : null
    state.pages.total = Math.ceil(data.posts.length / state.pages.per_page)
  },
  resetStateData (state) {
    const newState = initialState()
    Object.assign(state, newState)
  }
}
export const getters = {
  getPosts (state) {
    return state.posts
  }
}
