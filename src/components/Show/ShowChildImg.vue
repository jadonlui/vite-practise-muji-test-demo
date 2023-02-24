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
  
    <div class="card">
      <img :src="props.src" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ props.title }}</h5>
      </div>
    </div>
  
</template>

<style></style>
