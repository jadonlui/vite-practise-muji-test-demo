<script setup>
import ShowImges from "./components/Show/ShowImges.vue";
import SwiperAutoPlay from "./components/Carousel/SwiperAutoPlay.vue";
import SideMain from "./components/Side/SideMain.vue";
import ShowHeader from "./components/HeaderFooter/ShowHeader.vue";
import ShowFooter from "./components/HeaderFooter/ShowFooter.vue";
import ShowInterView from "./components/Show/ShowInterView.vue";
</script>

<template>
  <div class="container-fuild">
    <div class="row">
      <!-- header -->
      <ShowHeader />
    </div>
  </div>
  <div class="container-fuild">
    <div class="row justify-content-around">
      <div class="col-2">
        <SideMain />
      </div>
      <div class="col-9 ">
        <SwiperAutoPlay />
        <ShowImges />
        <ShowInterView />
        <ShowFooter />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
