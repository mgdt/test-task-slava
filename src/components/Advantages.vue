<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import AdvFirst from "./icons/Advantages/AdvFirst.vue";
import AdvSecond from "./icons/Advantages/AdvSecond.vue";
import AdvThird from "./icons/Advantages/AdvThird.vue";
import AdvFourth from "./icons/Advantages/AdvFourth.vue";
import AdvantagesItem from "./AdvantagesItem.vue";

import "swiper/css";

const enableSlider = document.documentElement.offsetWidth < 600;
</script>

<template>
  <section class="advantages">
    <div class="container">
      <h1 class="title advantages__title">
        Мы ценим Ваше время и комфорт!<br />
        Запишитесь на сервис Nissan онлайн
      </h1>
      <ul class="advantages__list" v-if="enableSlider">
        <Swiper
          :breakpoints="{
            1100: {
              slidesPerView: 4,
            },
            750: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 2,
            },
          }"
        >
          <SwiperSlide>
            <AdvantagesItem>
              <template v-slot:image>
                <AdvFirst></AdvFirst>
              </template>
              <template v-slot:title>выгода</template>
              <template v-slot:text>
                Узнайте о выгодных сервисных предложениях Nissan именно для
                вашего автомобиля
              </template>
            </AdvantagesItem>
          </SwiperSlide>
          <SwiperSlide>
            <AdvantagesItem>
              <template v-slot:image>
                <AdvSecond></AdvSecond>
              </template>
              <template v-slot:title>актуальность</template>
              <template v-slot:text>
                Выберите актуальные<br />для вас сервисные предложения
              </template>
            </AdvantagesItem>
          </SwiperSlide>
          <SwiperSlide>
            <AdvantagesItem>
              <template v-slot:image>
                <AdvThird></AdvThird>
              </template>
              <template v-slot:title>выгода</template>
              <template v-slot:text>
                Выберите дилера,<br />который вам подходит
              </template>
            </AdvantagesItem>
          </SwiperSlide>
          <SwiperSlide>
            <AdvantagesItem>
              <template v-slot:image>
                <AdvFourth></AdvFourth>
              </template>
              <template v-slot:title>онлайн обслуживание</template>
              <template v-slot:text>
                Отправьте дилеру данные о вашем автомобиле в форме удобной
                анкеты
              </template>
            </AdvantagesItem>
          </SwiperSlide>
        </Swiper>
      </ul>
      <ul class="advantages__list" v-else>
        <AdvantagesItem>
          <template v-slot:image>
            <AdvFirst></AdvFirst>
          </template>
          <template v-slot:title>выгода</template>
          <template v-slot:text>
            Узнайте о выгодных сервисных предложениях Nissan именно для вашего
            автомобиля
          </template>
        </AdvantagesItem>
        <AdvantagesItem>
          <template v-slot:image>
            <AdvSecond></AdvSecond>
          </template>
          <template v-slot:title>актуальность</template>
          <template v-slot:text>
            Выберите актуальные<br />для вас сервисные предложения
          </template>
        </AdvantagesItem>
        <AdvantagesItem>
          <template v-slot:image>
            <AdvThird></AdvThird>
          </template>
          <template v-slot:title>выгода</template>
          <template v-slot:text>
            Выберите дилера,<br />который вам подходит
          </template>
        </AdvantagesItem>
        <AdvantagesItem>
          <template v-slot:image>
            <AdvFourth></AdvFourth>
          </template>
          <template v-slot:title>онлайн обслуживание</template>
          <template v-slot:text>
            Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты
          </template>
        </AdvantagesItem>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.advantages__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}
.advantages__list .swiper {
  width: 100%;
}
.advantages {
  padding-bottom: 110px;
}
.title {
  font-size: 38px;
  font-weight: 300;
  line-height: 133%;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &::before {
    content: "";
    width: 78px;
    height: 4px;
    background-color: #c10933;
  }
}
.advantages__title {
  margin-bottom: 48px;
}

@media screen and (max-width: 1180px) {
  .advantages__list {
    gap: 0;
    row-gap: 50px;
  }
}

@media screen and (max-width: 780px) {
  .advantages__title {
    font-size: 34px;
  }
}

@media screen and (max-width: 560px) {
  .advantages__title {
    font-size: 30px;
  }
  .advantages {
    padding-bottom: 60px;
  }
}
</style>
