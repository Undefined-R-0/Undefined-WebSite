<template>
  <div class="container mx-auto bg-gray-50 px-4 py-5">
    <!-- 文字标题 -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="mb-6 text-3xl font-bold md:text-4xl md:!leading-[50px]">我们的愿景</h2>
      <p class="text-gray-400">
        构建一个不被主流社会所接纳的人类庇护所，摆脱社会的各种刻板印象，让每个人都能找到自己的位置，不受任何限制，自由发展。
      </p>
    </div>
    <!-- 卡片 -->
    <div class="card-container mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-2xl bg-gray-200 px-6 py-4 text-center shadow-xl transition-all hover:scale-110">
        <CpuChipIcon class="mb-6 inline-block w-12 rounded-xl bg-gray-300 p-3" />
        <h3 class="mb-4 text-xl">去中心化</h3>
        <p class="text-gray-500">无需担心中心化的限制，我们的社区是去中心化的，每个人都有发言权。</p>
        <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 hover:underline">Learn more</a>
      </div>
      <div class="rounded-2xl bg-gray-200 px-6 py-4 text-center shadow-xl transition-all hover:scale-110">
        <ChatBubbleLeftIcon class="mb-6 inline-block w-12 rounded-xl bg-gray-300 p-3" />
        <h3 class="mb-4 text-xl">自由表达</h3>
        <p class="text-gray-500">无论你是谁，无论你的观点是什么，我们都欢迎你的加入，自由表达。</p>
        <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 hover:underline">Learn more</a>
      </div>
      <div class="rounded-2xl bg-gray-200 px-6 py-4 text-center shadow-xl transition-all hover:scale-110">
        <CurrencyYenIcon class="mb-6 inline-block w-12 rounded-xl bg-gray-300 p-3" />
        <h3 class="mb-4 text-xl">普世价值</h3>
        <p class="text-gray-500">我们秉持着普世价值观，无论你是谁，我们都欢迎你的加入。</p>
        <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 hover:underline">Learn more</a>
      </div>
      <div class="rounded-2xl bg-gray-200 px-6 py-4 text-center shadow-xl transition-all hover:scale-110">
        <Square3Stack3DIcon class="mb-6 inline-block w-12 rounded-xl bg-gray-300 p-3" />
        <h3 class="mb-4 text-xl">多元化</h3>
        <p class="text-gray-500">让社会多元化，少数群体的才能发声，争取权力</p>
        <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 hover:underline">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CpuChipIcon, ChatBubbleLeftIcon, CurrencyYenIcon, Square3Stack3DIcon } from "@heroicons/vue/24/outline"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { onMounted } from "vue"

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const cardContainer = document.querySelector(".card-container") as HTMLElement
  const cardItems = cardContainer.querySelectorAll(".card-container > div")

  gsap.set(cardItems, { opacity: 0 }) // 初始状态将卡片透明度设为0

  gsap.fromTo(
    cardItems,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      stagger: 0.2
    }
  )
})
</script>

<style scoped></style>
