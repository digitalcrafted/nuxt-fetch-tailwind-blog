<template>
  <div>
    <Hero :caption="post.title" :sub-caption="formatDate" :image="post.image" />
    <Article :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState} from 'vuex'

export default Vue.extend({
  name: 'BlogPost',
  data() {
    return {
      postsList: [],
      activePage: 1,
      search: null
    }
  },
  head() {
    const img = this.post.image
    return {
      title: this.post.title,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'og:title', property: 'og:title', content: this.post.title},
        {hid: 'description', name: 'description', content: this.post.summary},
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.summary,
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
    ...mapState('posts', ['posts', 'pages', 'post']),
    formatDate() {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(this.post.created_at * 1000).toLocaleString('en-GB', options)
    }
  },
  watch: {
    $route() {
      this.getPost(this.$route.params.id)
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    /*handle direct page visits that does not use the pagination*/
    this.$store.dispatch('posts/fetchPost', {id: this.$route.params.id}).then(() => {
    })
  },
  methods: {
    getPost(id) {
      this.$store.dispatch('posts/fetchPost', {id}).then(() => {
      })
    },
  }

})
</script>
<style></style>
