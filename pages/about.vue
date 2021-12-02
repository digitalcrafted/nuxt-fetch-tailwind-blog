<template>
  <div>
    <Header />
    <Hero caption="About"/>
    <About/>
    <Footer />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'AboutPage',
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
      title: 'About Factorial',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:title', property: 'og:title', content: 'About Factorial' },
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
