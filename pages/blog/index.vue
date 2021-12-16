<template>
  <div>
    <Hero />
    <Posts :active-page="activePage" :pages='pages' :posts="posts" @switchPage="switchPage" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {mapState} from 'vuex'

export default Vue.extend({
  name: 'BlogIndex',
  data() {
    return {
      postsList: [],
      activePage: 1,
      search: null
    }
  },
  head() {
    const img = 'https://cdn.pixabay.com/photo/2015/07/10/15/42/ford-839538_1280.jpg'
    return {
      title: 'Fetch Blog',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'og:title', property: 'og:title', content: 'Fetch Blog'},
        {hid: 'description', name: 'description', content: 'on strategy, workflows and code'},
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'on strategy, workflows and code',
        },
        {hid: 'og:image', property: 'og:image', content: img},
        {
          hid: 'og:url',
          property: 'og:url',
          content: window.location.href,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]
    }
  },
  computed: {
    ...mapState('posts', ['posts', 'pages'])
  },
  watch: {
    search(val) {
      setTimeout(() => {
        this.filterPosts(val)
      }, 2000)
    }
  },
  mounted() {
    /*handle direct page visits that does not use the pagination*/
    this.$store.dispatch('posts/fetchPosts', {page: 1 || this.$route.query.page}).then(() => {
      this.getPostsList()
    })
  },
  methods: {
    getPostsList() {
      this.postsList = this.posts
    },
    switchPage(page) {
      this.$store.dispatch('posts/fetchPosts', {page: page}).then(() => {
        this.getPostsList()
      })
    },
    filterPosts(arg) {
      if (arg.length > 3) {
        this.postsList = this.posts.filter((post) => {
          return post.title === arg
        })
        return this.postsList
      } else {
        this.getPostsList()
      }
    }
  }

})
</script>
<style></style>
