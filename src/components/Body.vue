<template>
  <Intro></Intro>
  <ListContainer></ListContainer>
  <TargetCard></TargetCard>
  <PicIntro v-for="picIntro in picIntros" :key="picIntro.title" v-bind="picIntro"></PicIntro>
  <Reference></Reference>
  <Comment></Comment>
  <Footer></Footer>
</template>

<script lang="ts" setup>
import Intro from "./TitleIntro.vue"
import PicIntro from "./PicIntro.vue"
import Reference from "./Reference.vue"
import Footer from "./Footer.vue"
import ListContainer from "./ListScroll.vue"
import TargetCard from "./TargetCard.vue"
import Comment from "./Donate.vue"
import GaoKao from "@/assets/img/GaoKao.jpg"
import MTFImg from "@/assets/img/MTF.jpg"

import { ref } from "vue"

// export props to components
type TargetCardProps = InstanceType<typeof PicIntro>["$props"]

const picIntros = ref<TargetCardProps[]>([
  {
    title: "被应试教育摧残者",
    content:
      "颖儿是中国大陆的一名高三学生，学校所崇尚的军事化管理令她感到窒息，同学、老师的不接纳导致她患上了严重的抑郁症。去年6月，高考前夕，她选择了以生命控诉社会对她的不公。",
    img: GaoKao,
    imgDirection: "left"
  },
  {
    title: "性少数群体",
    content:
      "性少数群体是指性别认同、性取向、性别表达等方面与传统性别规范不符的人群。他们在社会中常常受到歧视、排斥、甚至暴力对待。在中国，性少数群体的权益保障仍然是一个亟待解决的问题。",
    img: MTFImg,
    imgDirection: "right"
  }
])
</script>

<style scoped></style>
