<script setup>
import Figaro from "./icons/Figaro.vue";
import Nim from "./icons/Nim.vue";
import ButtonPrimary from "./ButtonPrimary.vue";
</script>

<template>
  <section class="hero">
    <div class="hero__top">
      <div class="container">
        <div class="hero__btn">
          <ButtonPrimary>Тест-драйв</ButtonPrimary>
        </div>
        <div class="hero__car">
          <img loading="lazy" src="/images/car.png" alt="" class="hero__img" />
          <img src="/images/car-shadow.png" alt="" class="hero__img-shadow" />
        </div>
      </div>
      <div class="hero__title">
        <Figaro></Figaro>
      </div>
    </div>
    <div class="hero__btm">
      <div class="container">
        <Nim></Nim>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-bottom: 54px;
}
.hero__top {
  height: 465px;
  background-image: url("/images/hero-bg.png");
  background-color: #0abab5;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  padding-bottom: 65px;
}
.hero__top .container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
}
.hero__title {
  position: absolute;
  left: 50%;
  top: 120px;
  transform: translateX(-50%);
}
img {
  width: 100%;
}
.hero__car {
  position: absolute;
  width: 680px;
  right: 60px;
  bottom: -135px;
}
.hero__img {
  position: relative;
  z-index: 1;
}
.hero__img-shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  mix-blend-mode: multiply;
}
.hero__btm .container {
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
}

@media screen and (max-width: 1180px) {
  .hero__title svg {
    width: 700px;
  }
}

@media screen and (max-width: 1100px) {
  .hero__car {
    width: 600px;
  }
}

@media screen and (max-width: 980px) {
  .hero__car {
    width: 600px;
    top: 300px;
    left: calc(50% - 300px);
    bottom: unset;
  }
  .hero__btn {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .hero__btm .container {
    justify-content: flex-start;
  }
  .hero__top {
    height: 760px;
  }
}

@media screen and (max-width: 810px) {
  .hero__top {
    height: 700px;
  }
  .hero__car {
    width: 500px;
    bottom: unset;
    top: 300px;
    right: unset;
    left: calc(50% - 250px);
  }
}
@media screen and (max-width: 780px) {
  .hero__title svg {
    width: 600px;
  }
  .hero__car {
    width: 400px;
    left: calc(50% - 200px);
  }
  .hero__top {
    height: 660px;
  }
}
@media screen and (max-width: 660px) {
  .hero__title svg {
    width: 400px;
  }
  .hero__car {
    width: 300px;
    left: calc(50% - 150px);
  }
  .hero__top {
    height: 600px;
  }
}
@media screen and (max-width: 454px) {
  .hero__title svg {
    width: 300px;
  }
  .hero__car {
    width: 260px;
    left: calc(50% - 130px);
  }
}
</style>
