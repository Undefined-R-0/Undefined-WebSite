<template>
  <div class="mx-auto flex justify-center px-4 pb-10 pt-20 lg:gap-8 lg:py-10 lg:pt-20 xl:gap-0">
    <div class="">
      <h1
        class="xl:text-10xl mb-4 max-w-2xl text-wrap text-5xl font-extrabold leading-none tracking-tight dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
      >
        <span class="jump text-purple-700">U</span> ndefined <br />
        <span class="jump text-purple-700">U</span> nidentified <br />
        <span class="jump text-purple-700">U</span> nknown
      </h1>

      <p class="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
        这里是不被主流社会所定义的人的庇护所
      </p>

      <div class="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
        <a
          href="#"
          class="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto"
        >
          加入我们
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { onMounted } from "vue"
// import gsap from "gsap"

// onMounted(() => {
//   gsap.to(".jump", {
//     scale: 1.1,
//     repeat: -1,
//     duration: 1
//   })
// })
</script>

<style scoped>
.st0 {
  fill: #0acf83;
}

.st1 {
  fill: #a259ff;
}

.st2 {
  fill: #f24e1e;
}

.st3 {
  fill: #ff7262;
}

.st4 {
  fill: #1abcfe;
}

.jump {
  animation: shining 0.1s alternate infinite;
}

@keyframes shining {
  from {
    text-shadow:
      0 0 6px rgba(182, 211, 207, 0.9),
      0 0 30px rgba(182, 211, 207, 0.3),
      0 0 12px rgba(15, 115, 223, 0.5),
      0 0 21px rgba(15, 115, 223, 0.9),
      0 0 34px rgba(15, 115, 223, 0.8),
      0 0 54px rgba(15, 115, 223, 0.9);
  }

  to {
    text-shadow:
      0 0 6px rgba(182, 211, 207, 1),
      0 0 30px rgba(182, 211, 207, 0.4),
      0 0 12px rgba(15, 115, 223, 0.6),
      0 0 22px rgba(15, 115, 223, 0.8),
      0 0 38px rgba(15, 115, 223, 0.9),
      0 0 60px rgba(15, 115, 223, 1);
  }
}
</style>
