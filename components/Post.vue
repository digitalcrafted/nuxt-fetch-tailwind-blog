<template>
  <nuxt-link :to="{path:'/blog/'+data.id}">
    <div
      class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden h-96"
      :style="{ backgroundImage: 'url(' + data.image + ')' }">
      <div class="absolute w-full h-full bg-black z-10 opacity-50"></div>
      <div class="relative z-20 text-center p-5">
        <h3 class="text-white text-shadow font-semibold font-serif text-xl my-1">{{ data.title }}</h3>
        <span class="inline-block text-xs text-white text-shadow font-sans">{{ data.summary | truncate(50) }}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Post',
  props: {
    data: {
      type: Object,
      default: () => {
      }
    }
  }
})
</script>

<style scoped>

</style>
