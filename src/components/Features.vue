<script setup>
import { onMounted } from "vue";
import { useFeaturesStore } from "../stores/features";
import { fetchFeatures } from "../api/index";
import FeaturesItem from "./FeaturesItem.vue";

const featuresStore = useFeaturesStore();

onMounted(async () => {
  const featuresData = await fetchFeatures();
  featuresStore.features = featuresData.features;
  featuresStore.sectionTitle = featuresData.block_heading;
  featuresStore.assetsDomain = featuresData.assets_domain;
});

function handleButtonClick() {
  featuresStore.features.push({
    description:
      "Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.",
    sorting: 0.5,
    model_name: "Figaro",
    image: "/images/img4.png",
    image_alt: "нестационарный гироскопический стабилизатор",
  });
}
</script>

<template>
  <section class="features" v-if="featuresStore.features">
    <div class="container">
      <h2 class="features__title section__title">
        {{ featuresStore.sectionTitle }}
      </h2>
      <ul class="features__list">
        <FeaturesItem
          v-for="(feature, index) in featuresStore.featuresSorted"
          :key="index"
          :image-url="`${feature.image}`"
          :image-alt="feature.image_alt"
          :description="feature.description.replaceAll('\n', '<br>')"
        >
        </FeaturesItem>
      </ul>
      <button
        @click.once="handleButtonClick"
        class="btn-secondary features__btn"
      >
        Добавить особенность
      </button>
    </div>
  </section>
</template>

<style scoped>
.features__title {
  margin-bottom: 48px;
}
.section__title {
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 133%;
  text-transform: uppercase;
}
.features {
  padding-bottom: 64px;
}
.features__list {
  display: flex;
  row-gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.btn-secondary {
  display: flex;
  height: 50px;
  border: 2px solid #c31631;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 13px 47px;
  cursor: pointer;
  font-size: 16px;
  line-height: 150%;
}
.features__btn {
  margin: 0 auto;
  margin-top: 40px;
}

@media screen and (max-width: 576px) {
  .features__title {
    text-align: center;
  }
  .section__title {
    font-size: 32px;
  }
}
</style>
