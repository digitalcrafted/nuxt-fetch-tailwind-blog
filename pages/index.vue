<template>
  <div>gg
    {{ postsList }}
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      postsList: [],
      search: null
    }
  },
  computed: {
    ...mapState('posts', ['posts', 'pages'])
  },
  watch: {
    search (val) {
      setTimeout(() => {
        this.filterPosts(val)
      }, 2000)
    }
  },
  mounted () {
    if (!this.posts.length) {
      this.$nuxt.$store.dispatch('posts/fetchPosts', {page: 1 || $this.$route.query.page}).then(() => {
        this.getPostsList()
      })
    }
    this.getPostsList()
  },
  methods: {
    getPostsList () {
      this.postsList = this.posts.filter((product) => {
          return product.catname === this.selectedCategory
        })
    },
    switchPage (cat) {
      this.$nuxt.$store.dispatch('products/fetchProducts', { page: cat }).then(() => {
        this.getProductsList()
      })
    },
    filterPosts (arg) {
      if (arg.length > 3) {
        this.postsList = this.posts.reduce(
          function (list, item) {
            if (item.name.includes(arg)) {
              list.push(item)
            }
            return list
          },
          []
        )
        return this.postsList
      } else {
        this.getPostsList()
      }
    }
  }

}
</script>
