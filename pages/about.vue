<template>
  <div>
    <Hero caption="About" />
    <About />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'AboutPage',
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
    $route () {
      this.getPost(this.$route.params.id)
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    /*handle direct page visits that does not use the pagination*/
    this.$store.dispatch('posts/fetchPost', {id: this.$route.params.id}).then(() => {})
  },
  methods: {
    getPost (id) {
      this.$store.dispatch('posts/fetchPost', {id}).then(() => {})
    },
  }

})
</script>
<style></style>
