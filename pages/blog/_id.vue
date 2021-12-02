<template>
  <div>
    <Header />
    <Hero :caption="post.title" :sub-caption="post.created_at" :image="post.image"/>
    <Article :post="post"/>
    <Footer />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'BlogPost',
  data () {
    return {
      postsList: [],
      activePage: 1,
      search: null
    }
  },
  head() {
    const img =  this.post.image
    return {
      title: this.post.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        { hid: 'description', name: 'description', content: this.post.summary },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.summary,
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
    ...mapState('posts', ['posts', 'pages', 'post'])
  },
  watch: {
    $route() {
      this.getPost(this.$route.params.id)
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    /*handle direct page visits that does not use the pagination*/
      this.$nuxt.$store.dispatch('posts/fetchPost', {id: this.$route.params.id}).then(() => {})
  },
  methods: {
    getPost (id) {
      this.$nuxt.$store.dispatch('posts/fetchPost', {id}).then(() => {})
    },
  }

}
</script>
<style></style>
