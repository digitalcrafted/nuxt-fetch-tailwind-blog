<template>
  <div>
    <Header />
    <Posts :active-page="activePage" :pages='pages' :posts="posts" @switchPage="switchPage" />
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
    ...mapState('posts', ['posts', 'pages'])
  },
  watch: {
    $route() {
      console.log(this.$route.params.id)
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    /*handle direct page visits that does not use the pagination*/
      this.$nuxt.$store.dispatch('posts/fetchPosts', {id: this.$route.params.id}).then(() => {
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
