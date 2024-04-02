<template>
  <div class="container fixed mx-auto justify-between" style="z-index: 1">
    <div class="border-gray-200 bg-white py-2.5">
      <div class="flex w-full flex-wrap items-center justify-between">
        <a href="#" class="flex items-center">
          <!-- <img src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" /> -->
          <GlobeAsiaAustraliaIcon class="mr-3 h-6 animate-bounce text-purple-700 sm:h-9" />
          <span class="self-center whitespace-nowrap text-xl font-semibold">Undefined</span>
        </a>
        <div class="flex items-center lg:order-2">
          <!-- <a href="#"
            class="text-gray-800   hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2   focus:outline-none  ">Log
            in</a> -->
          <div class="px-3">
            <Switch></Switch>
          </div>
          <a
            :href="githubUrl"
            class="mr-0 rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 lg:mr-0 lg:px-5 lg:py-2.5"
          >
            <div class="flex justify-center space-x-2">
              <span>加入咱们</span>
              <Github size="20"></Github>
            </div>
          </a>
          <button
            type="button"
            class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
            @click="switchMenu()"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
        <div ref="navCloseDiv" class="hidden w-full items-center justify-between bg-white lg:order-1 lg:flex lg:w-auto">
          <ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
            <li>
              <a
                href="#"
                class="block rounded bg-purple-700 py-2 pl-3 pr-4 text-white lg:bg-transparent lg:p-0 lg:text-purple-700"
                aria-current="page"
                >主页</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700"
                >公司</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700"
                >关于</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700"
                >愿景</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700"
                >团队</a
              >
            </li>
            <li>
              <a
                :href="githubUrl"
                class="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700"
                >联系我们</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Bars3Icon, GlobeAsiaAustraliaIcon } from "@heroicons/vue/24/outline"
import { ref } from "vue"
import { Switch } from "vue-dark-switch"
import { Github } from "@icon-park/vue-next"
import { getGithubUrl } from "@/injects"
const githubUrl = getGithubUrl()
// import { gsap } from "gsap";

const isMenuOpen = ref(true)
const navCloseDiv = ref<HTMLDivElement | null>()

const switchMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (navCloseDiv.value) {
    navCloseDiv.value.classList.toggle("hidden")
  }
}

// onMounted(() => {
//   const logoEle: any = logo.value;
//   gsap.to(logoEle, { rotation: 360, repeat: -1, ease: "linear", duration: 1.5, transformOrigin: "50% 50%" });
// })
</script>

<style scoped></style>
