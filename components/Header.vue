<template>
  <header role="banner">
    <nav class="bg-white py-2 md:py-4" role="navigation">
      <div class="container px-4 mx-auto md:flex md:items-center">
        <div class="flex justify-between items-center">
          <a href="/" class="font-bold text-xl h-12 w-32">
            <img src="/logo.svg" alt="Tackline">
          </a>
          <button
            class="border border-solid border-gray-600 px-3 py-1 rounded text-black opacity-100 hover:opacity-75 md:hidden"
            @click="toggleBtn">
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
        <div class="hidden text-gray-700 md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" ref="collapse">
          <nuxt-link :to="{path: '/'}" class="p-2 lg:px-4 md:mx-2 rounded"
                     :class="{' text-white bg-black': $route.name ==='index'}">Home
          </nuxt-link>
          <nuxt-link :to="{path: '/about'}"
                     class="p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                     :class="{'bg-black text-white': $route.name ==='about'}">About
          </nuxt-link>
          <nuxt-link :to="{path: '/blog'}"
                     class="p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                     :class="{'bg-black text-white': $route.path.split('/')[1] ==='blog'}">Blog
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Header',
  methods: {
    toggleBtn () {
      this.$refs['collapse'].classList.toggle('hidden')
      this.$refs['collapse'].classList.toggle('flex')
    }
  }
})
</script>

<style scoped>

</style>
