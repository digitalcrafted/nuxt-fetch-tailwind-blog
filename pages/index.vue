<template>
  <div>
    <Hero />
    <Posts :active-page="activePage" :pages='pages' :posts="posts" @switchPage="switchPage" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {mapState} from "vuex"

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      postsList: [],
      activePage: 1,
      search: null
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
