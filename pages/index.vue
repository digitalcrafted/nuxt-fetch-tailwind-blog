<template>
  <div>
    <Header />
    <div class="bg-gray-100">
      <!-- featured -->
      <div class="max-w-5xl mx-auto pt-10 pb-10">
        <ul class="flex flex-wrap -mx-2 overflow-hidden">
          <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
            <a href="">
              <div class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" style="height:400px; background-image:url(http://dummyimage.com/360x285.png/dddddd/000000)">
                <div class="absolute w-full h-full bg-black z-10 opacity-50"></div>
                <div class="relative z-20 text-center p-5">
                  <span class="inline-block text-white uppercase text-xs tracking-wide">Hotels</span>
                  <h2 class="text-white font-semibold font-serif text-xl my-5">Places to stay in the island on your visit</h2>
                  <span class="inline-block text-xs text-white font-sans">Comfort and views</span>
                </div>
              </div>
            </a>
          </li>
          <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
            <a href="">
              <div class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" style="height:400px; background-image:url(http://dummyimage.com/360x285.png/dddddd/000000)">
                <div class="absolute w-full h-full bg-black z-10 opacity-50"></div>
                <div class="relative z-20 text-center p-5">
                  <span class="inline-block text-white uppercase text-xs tracking-wide">Diving</span>
                  <h2 class="text-white font-semibold font-serif text-xl my-5">Diving for Sharks, the best experience in the country</h2>
                  <span class="inline-block text-xs text-white font-sans">Every day of the week</span>
                </div>
              </div>
            </a>
          </li>
          <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
            <a href="">
              <div class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden" style="height:400px; background-image:url(http://dummyimage.com/360x285.png/dddddd/000000)">
                <div class="absolute w-full h-full bg-black z-10 opacity-50"></div>
                <div class="relative z-20 text-center p-5">
                  <span class="inline-block text-white uppercase text-xs tracking-wide">Food</span>
                  <h2 class="text-white font-semibold font-serif text-xl my-5">Take your tastebuds for a ride with these places</h2>
                  <span class="inline-block text-xs text-white font-sans">Different cuisine</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="text-center">
        <button class="rounded-sm bg-gray-900 text-white tracking-widest text-sm uppercase font-medium py-3 mt-5 px-5">Load more articles</button>
      </div>
    </div>
    <Footer />
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
      this.$nuxt.$store.dispatch('posts/fetchPosts', {page: 1 || this.$route.query.page}).then(() => {
        this.getPostsList()
      })
    }
    this.getPostsList()
  },
  methods: {
    getPostsList () {
      this.postsList = this.posts
    },
    switchPage (cat) {
      this.$nuxt.$store.dispatch('posts/fetchPosts', { page: cat }).then(() => {
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
    },
    toggleBtn(){
      this.$refs['collapse'].classList.toggle("hidden");
      this.$refs['collapse'].classList.toggle("flex");
    }
  }

}
</script>
<style></style>
