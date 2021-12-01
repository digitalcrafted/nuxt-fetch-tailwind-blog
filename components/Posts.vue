<template>
  <div class="bg-gray-100">
    <!-- featured -->
    <div class="max-w-5xl mx-auto pt-10 pb-10">
      <ul class="flex flex-wrap -mx-2 overflow-hidden">
           <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3" v-for="(item, index) in [1,2,3]" :key="index">
             <Post />
           </li>
      </ul>
    </div>
    <div class="text-center">
      <button class="rounded-sm bg-gray-900 text-white tracking-widest text-sm uppercase font-medium py-3 mt-5 px-5">Load more articles</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts'
}
</script>

<style scoped>

</style>
