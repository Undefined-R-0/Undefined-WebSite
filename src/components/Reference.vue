<template>
  <!-- Start block -->
  <section class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-24">
      <figure class="mx-auto max-w-screen-md">
        <svg class="mx-auto mb-3 h-12 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p class="text-xl font-medium text-gray-900 md:text-2xl">
            "AI 给人们带来事业，我们去解救他们。把人类被忽视的智力资源利用起来"
          </p>
        </blockquote>
        <figcaption class="mt-6 flex items-center justify-center space-x-3">
          <img class="h-10 w-10 rounded-full" :src="avatarImg" alt="profile picture" />
          <div class="flex items-center divide-x-2 divide-gray-500">
            <div class="pr-3 font-medium text-gray-900">Gundnek</div>
            <div class="pl-3 text-sm font-light text-gray-500">CEO at Undefined</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script lang="ts" setup>
import avatarImg from "@/assets/img/CEOAvatar.jpg"
</script>

<style scoped></style>
