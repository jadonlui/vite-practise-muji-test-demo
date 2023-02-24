<script setup>
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

</script>

<template>

  <div class="card mb-3">
    <div class="row ">
      <div class="col-5">
        <img :src="props.src" class="img-fluid rounded-start" />
      </div>
      <div class="col-7 align-self-center">
        <div class="card-body ">
          <p class="m-0 ">{{ props.title }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="card">
    <img :src="props.src" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ props.title }}</h5>
    </div>
  </div> -->
</template>

<style></style>
