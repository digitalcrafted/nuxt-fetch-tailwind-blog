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
