<template>
  <!-- End block -->
  <footer class="bg-white dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Company</h3>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">About</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Careers</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Brand Center</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Help center</h3>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Discord Server</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Twitter</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Facebook</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h3>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Licensing</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Terms</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Company</h3>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">About</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Careers</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Brand Center</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Download</h3>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">iOS</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Android</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Windows</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">MacOS</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

      <!-- 最底下 -->
      <div class="text-center">
        <a href="#" class="mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img :src="IconImg" class="mr-3 h-6 rounded-full sm:h-9" alt="Landwind Logo" />
          Undefined
        </a>
        <span class="block text-center text-sm text-gray-500 dark:text-gray-400"
          >© 2023-2024 Undefined™. All Rights Reserved. Built By whalefell.
        </span>
        <ul class="mt-5 flex justify-center space-x-5">
          <li>
            <a :href="githubUrl" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Github size="32"></Github>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { Github } from "@icon-park/vue-next"
import IconImg from "@/assets/img/CEOAvatar.jpg"
import { getGithubUrl } from "@/injects"
const githubUrl: string = getGithubUrl()
</script>

<style scoped></style>
