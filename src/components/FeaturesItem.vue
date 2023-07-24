<script setup>
const props = defineProps({
  imageUrl: String,
  imageAlt: String,
  description: String,
});
</script>

<template>
  <li class="features__item">
    <img
      :src="props.imageUrl"
      :alt="props.imageAlt"
      class="features__item-img"
    />
    <p class="features__item-text" v-html="props.description"></p>
  </li>
</template>

<style scoped>
.features__item {
  width: 32%;
}
.features__item-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.features__item-text {
  margin-top: 16px;
  font-size: 16px;
  line-height: 160%;
  font-weight: 300;
}
@media screen and (max-width: 1080px) {
  .features__item {
    width: 49%;
  }
}
@media screen and (max-width: 728px) {
  .features__item {
    width: 100%;
  }
}
</style>
