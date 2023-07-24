<template>
  <li class="advantages__item">
    <div class="advantages__item-img">
      <slot name="image"></slot>
      <h3 class="advantages__item-title"><slot name="title"></slot></h3>
      <p class="advantages__item-text">
        <slot name="text"></slot>
      </p>
    </div>
  </li>
</template>

<style scoped>
.advantages__item-img {
  text-align: center;
}
.advantages__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 260px;
}
.advantages__item-title {
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
}
.advantages__item-text {
  text-align: center;
  margin-top: 16px;
  font-size: 16px;
  line-height: 160%;
  text-transform: uppercase;
}

@media screen and (max-width: 1180px) {
  .advantages__item {
    width: 49%;
    max-width: unset;
  }
}
@media screen and (max-width: 600px) {
  .advantages__item {
    width: 100%;
  }
}
</style>
