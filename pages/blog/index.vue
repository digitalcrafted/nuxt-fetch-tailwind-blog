<template>
  <div>
    <Header />
    <Hero />
    <Posts :active-page="activePage" :pages='pages' :posts="posts" @switchPage="switchPage" />
    <Footer />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'BlogIndex',
  data () {
    return {
      postsList: [],
      activePage: 1,
      search: null
    }
  },
  head() {
    const img =  'https://bo.factorial.io/sites/default/files/styles/hero_image__large__1x/public/2020-04/_99B5622.jpg.webp?h=b9aa6a85&itok=lx7mK32f'
    return {
      title: 'Factorial Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:title', property: 'og:title', content: 'Factorial Blog' },
        { hid: 'description', name: 'description', content: 'on strategy, workflows and code' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'on strategy, workflows and code',
        },
        { hid: 'og:image', property: 'og:image', content: img },
        {
          hid: 'og:url',
          property: 'og:url',
          content: window.location.href,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content:'summary_large_image',
        },
      ]
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
    /*handle direct page visits that does not use the pagination*/
      this.$nuxt.$store.dispatch('posts/fetchPosts', {page: 1 || this.$route.query.page}).then(() => {
        this.getPostsList()
      })
  },
  methods: {
    getPostsList () {
      this.postsList = this.posts
    },
    switchPage (page) {
      console.log('here')
      this.$nuxt.$store.dispatch('posts/fetchPosts', { page: page }).then(() => {
        this.getPostsList()
      })
    },
    filterPosts (arg) {
      if (arg.length > 3) {
        this.postsList = this.posts.filter((post)=>{
          return post.title === arg
        })
        return this.postsList
      } else {
        this.getPostsList()
      }
    }
  }

}
</script>
<style></style>
