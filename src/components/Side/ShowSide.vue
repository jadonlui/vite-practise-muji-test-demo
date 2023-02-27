<script setup>
const props = defineProps({
  one: {
    type: String,
    default: "",
  },
  two: {
    type: Array,
    default: () => [""],
  },
});
</script>

<template>
  <div>
    <div v-if="props.two.length !== 0">
      <li class="nav-item dropdown dropend">
        <a
          class="nav-link"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div class="d-flex  justify-content-between">
            <div>
              <p>{{ props.one }}</p>
            </div>
            <div class="imgBox">
              <img src="../../images/right.svg" />
            </div>
          </div>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li v-for="tt in props.two">
            <a class="dropdown-item" href="#">
              {{ tt }}
            </a>
          </li>
        </ul>
      </li>
    </div>
    <div v-else>
      <p class="card-title">{{ props.one }}</p>
    </div>
  </div>
</template>

<style>
.imgBox {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
