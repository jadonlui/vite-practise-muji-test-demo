<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "./SwiperAutoPlay.css";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { useImgsOne } from "../../composables/useImgsOne.js";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const { swiperDataImgs } = useImgsOne();
console.log("swiperDataImgs", swiperDataImgs);
const modules = [Autoplay, Pagination, Navigation];
</script>
<template>
  <span style="font-size: 3em; color: Tomato">
    <i class="fa-solid fa-camera"></i>
  </span>
  <div class="mb-5 ">
    <div class="swiperbody">
      <swiper
        :loop="true"
        :spaceBetween="30"
        :autoplay="{
          delay: 2800,
          disableOnInteraction: false,
        }"
        :centeredSlides="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="topImg in swiperDataImgs">
          <img :src="topImg.imgSrc" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
