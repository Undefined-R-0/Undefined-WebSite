<template>
  <div class="container mx-auto">
    <Header></Header>
    <Body></Body>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue"
import Body from "./components/Body.vue"
import { githubUrlKey } from "@/injects"
import { provide, onMounted } from "vue"

provide(githubUrlKey, "https://github.com/Undefined-R-0")

// all a tag open in new tab
const aTagOpenInNewTab = () => {
  document.querySelectorAll("a").forEach((el) => {
    el.setAttribute("target", "_blank")
  })
}

onMounted(() => {
  aTagOpenInNewTab()
})
</script>

<style scoped></style>
