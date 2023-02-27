<script setup>
import ShowImges from "./components/Show/ShowImges.vue";
import SwiperAutoPlay from "./components/Carousel/SwiperAutoPlay.vue";
import SideMain from "./components/Side/SideMain.vue";
</script>

<template>
  <div class="container-fuild">
    <div class="row">
      <!-- header -->
    </div>
  </div>
  <div class="container-fuild">
    <div class="row">
      <div class="col-2">
        <SideMain />
      </div>
      <div class="col-10">
        <SwiperAutoPlay />
        <ShowImges />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <!-- footer -->
    </div>
  </div>
</template>

<style scoped></style>
