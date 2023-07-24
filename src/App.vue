<script setup>
import Hero from "./components/Hero.vue";
import Advantages from "./components/Advantages.vue";
import Features from "./components/Features.vue";
</script>

<template>
  <main>
    <Hero></Hero>
    <Advantages></Advantages>
    <Features></Features>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "NissanBrand";
}
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 20px;
}
img {
  display: block;
}
ul {
  list-style: none;
}
</style>
