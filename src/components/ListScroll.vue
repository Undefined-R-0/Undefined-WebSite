<template>
  <div class="container relative mx-auto flex w-screen overflow-hidden" id="container">
    <div class="text-nowrap">
      <span v-for="(text, index) in texts" :key="index">
        {{ text }}
      </span>
    </div>
    <div class="text-nowrap">
      <span v-for="(text, index) in texts" :key="index">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, withDefaults, onMounted } from "vue"
const props = withDefaults(defineProps<{ texts?: string[]; duration?: number }>(), {
  texts: () => [
    "#不被定义",
    "#不被识别",
    "#不被认知",
    "#不被认可",
    "#不被接受",
    "#不被理解",
    "#不被接纳",
    "#不被尊重",
    "#不被关爱",
    "#不被关注"
  ],
  duration: 30
})
const texts = ref(props.texts)
const duration = ref(props.duration)

const minNum: number = 15

// if texts number is less than minNum, repeat the texts
const repeatText = () => {
  let num: number = texts.value.length
  if (num < minNum) {
    for (let i = 0; i < minNum - num + 1; i++) {
      texts.value.push(texts.value[i])
    }
  }
}

onMounted(() => {
  repeatText()
})
</script>

<style scoped>
* {
  --t: v-bind(duration + "s");
}

#container {
  mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
}

#container div span {
  display: inline-flex;
  margin: 10px;
  letter-spacing: 0.2em;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
}

#container div {
  animation: animate var(--t) linear infinite;
}

#container div:nth-child(2) {
  animation: animate2 var(--t) linear infinite;
  animation-delay: calc(var(--t) / -2);
}

@keyframes animate {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}

@keyframes animate2 {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-200%);
  }
}
</style>
