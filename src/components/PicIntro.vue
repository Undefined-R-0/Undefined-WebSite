<template>
  <!-- Start block -->
  <div class="container mx-auto bg-gray-50 px-5 py-5 dark:bg-gray-800 lg:px-5 lg:py-10">
    <!-- 图片在右边 -->
    <div class="flex flex-wrap justify-center gap-3 lg:flex-nowrap xl:flex-nowrap">
      <!-- 描述 -->
      <div
        class="flex flex-col justify-center divide-y-2 divide-gray-300 text-center text-gray-500 dark:text-gray-400 sm:text-lg lg:max-w-[50%] lg:text-start xl:max-w-[50%] xl:text-start"
      >
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{ props.title }}</h2>
        <p class="font-light lg:text-xl">
          {{ props.content }}
        </p>

        <button
          type="button"
          class="mt-3 items-center self-center rounded-md bg-purple-500 px-6 py-3.5 text-white transition-all hover:bg-purple-800"
        >
          支持她
        </button>
      </div>
      <!-- 图片 -->
      <div class="flex" :class="[props.imgDirection == ImgDirection.RIGHT ? '' : 'lg:order-first xl:order-first']">
        <img
          ref="picture"
          class="h-full w-full rounded-lg opacity-0 shadow-xl transition-all duration-1000 ease-in-out"
          :src="props.img"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- End block -->
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from "vue"
import GaoKao from "@/assets/img/GaoKao.jpg"
import { ref } from "vue"

const picture = ref<HTMLImageElement | null>(null)

enum ImgDirection {
  LEFT = "left",
  RIGHT = "right"
}

const props = withDefaults(
  defineProps<{
    title?: string
    content?: string
    img?: string
    imgDirection?: ImgDirection | string
  }>(),
  {
    title: "被应试教育摧残者",
    content:
      "颖儿是中国大陆的一名高三学生，学校所崇尚的军事化管理令她感到窒息，同学、老师的不接纳导致她患上了严重的抑郁症。去年6月，高考前夕，她选择了以生命控诉社会对她的不公。",
    img: GaoKao,
    imgDirection: ImgDirection.LEFT
  }
)

window.addEventListener("scroll", () => {
  // const img = document.querySelector(".picture") as HTMLImageElement
  const img = picture.value as HTMLImageElement
  const imgTop = img.getBoundingClientRect().top
  const imgBottom = img.getBoundingClientRect().bottom

  if (imgTop < window.innerHeight && imgBottom > 0) {
    img.classList.add("opacity-100")
  } else {
    img.classList.remove("opacity-100")
  }
})
</script>

<style scoped></style>
