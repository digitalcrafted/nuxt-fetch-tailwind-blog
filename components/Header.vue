<template>
  <header>
    <nav class="bg-white py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center">

        <div class="flex justify-between items-center">
          <a href="#" class="font-bold text-xl h-16 w-8"><svg width="100%" height="100%" viewBox="0 0 60 84" shape-rendering="crispEdges" class="fill-current text-black"><g transform="translate(0 0)" class=""><rect x="0px" y="0px" height="12px" width="4px" class=""></rect> <rect x="8px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(12 0)" class=""><rect x="0px" y="4px" height="4px" width="12px" class=""></rect> <rect x="4px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(24 0)" class=""><rect x="0px" y="0px" height="12px" width="6px" class=""></rect> <rect x="6px" y="0px" height="12px" width="6px" class=""></rect></g><g transform="translate(36 0)" class=""><rect x="0px" y="0px" height="12px" width="6px" class=""></rect> <rect x="6px" y="0px" height="12px" width="6px" class=""></rect></g><g transform="translate(48 0)" class=""><rect x="0px" y="0px" height="12px" width="4px" class=""></rect> <rect x="8px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(0 12)" class=""><rect x="0px" y="0px" height="12px" width="4px" class=""></rect> <rect x="8px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(12 12)" class=""><rect x="0px" y="0px" height="12px" width="6px" class=""></rect> <rect x="6px" y="0px" height="12px" width="6px" class=""></rect></g><g transform="translate(24 12)" class=""><rect x="0px" y="0px" height="12px" width="6px" class=""></rect> <rect x="6px" y="0px" height="12px" width="6px" class=""></rect></g><g transform="translate(36 12)" class=""><rect x="0px" y="0px" height="12px" width="6px" class=""></rect> <rect x="6px" y="0px" height="12px" width="6px" class=""></rect></g><g transform="translate(48 12)" class=""><rect x="0px" y="0px" height="12px" width="6px" class=""></rect> <rect x="6px" y="0px" height="12px" width="6px" class=""></rect></g><g transform="translate(0 24)" class=""><rect x="0px" y="0px" height="12px" width="4px" class=""></rect> <rect x="8px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(12 24)" class=""><rect x="0px" y="4px" height="4px" width="12px" class=""></rect> <rect x="4px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(0 36)" class=""><rect x="0px" y="4px" height="4px" width="12px" class=""></rect> <rect x="4px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(12 36)" class=""><rect x="0px" y="0px" height="12px" width="6px" class=""></rect> <rect x="6px" y="0px" height="12px" width="6px" class=""></rect></g><g transform="translate(24 36)" class=""><rect x="0px" y="0px" height="12px" width="4px" class=""></rect> <rect x="8px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(36 36)" class=""><rect x="0px" y="4px" height="4px" width="12px" class=""></rect> <rect x="4px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(0 48)" class=""><rect x="0px" y="0px" height="12px" width="4px" class=""></rect> <rect x="8px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(12 48)" class=""><rect x="0px" y="0px" height="12px" width="4px" class=""></rect> <rect x="8px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(24 48)" class=""><rect x="0px" y="0px" height="12px" width="6px" class=""></rect> <rect x="6px" y="0px" height="12px" width="6px" class=""></rect></g><g transform="translate(36 48)" class=""><rect x="0px" y="4px" height="4px" width="12px" class=""></rect> <rect x="4px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(0 60)" class=""><rect x="0px" y="0px" height="12px" width="4px" class=""></rect> <rect x="8px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(12 60)" class=""><rect x="0px" y="4px" height="4px" width="12px" class=""></rect> <rect x="4px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(0 72)" class=""><rect x="0px" y="4px" height="4px" width="12px" class=""></rect> <rect x="4px" y="0px" height="12px" width="4px" class=""></rect></g><g transform="translate(12 72)" class=""><rect x="0px" y="4px" height="4px" width="12px" class=""></rect> <rect x="4px" y="0px" height="12px" width="4px" class=""></rect></g></svg>
          </a>
          <button class="border border-solid border-gray-600 px-3 py-1 rounded text-black opacity-100 hover:opacity-75 md:hidden" @click="toggleBtn">
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
        <div class="hidden text-gray-700 md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" ref="collapse">
          <nuxt-link  :to="{path: '/'}"  class="p-2 lg:px-4 md:mx-2 rounded" :class="{' text-white bg-black': $route.name ==='index'}">Home</nuxt-link>
          <nuxt-link  :to="{path: '/about'}" class="p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" :class="{'bg-black text-white': $route.name ==='about'}">About</nuxt-link>
          <nuxt-link  :to="{path: '/'}"  class="p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300" :class="{'bg-black text-white': $route.name ==='blog'}">Blog</nuxt-link>
        </div>
      </div>
    </nav>

    <div class="bg-hero-bg">
      <div class="container px-4 mx-auto flex h-80">
        <div class="text-center text-white max-w-2xl m-auto">
          <h1 class="text-3xl md:text-4xl font-semibold mb-2 text-shadow">Thoughts</h1>
          <h2 class="text-2xl md:text-3xl sm:text-1xl font-semibold md:leading-loose text-shadow">on strategy, workflows and code</h2>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
