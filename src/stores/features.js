import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFeaturesStore = defineStore("features", () => {
  const features = ref(null);
  const assetsDomain = ref(null);
  const sectionTitle = ref("");

  const featuresSorted = computed(() => {
    return features.value
      .filter(
        (feature) =>
          feature.model_name === "Figaro" &&
          feature.image !== null &&
          feature.description.length > 0
      )
      .sort((a, b) => a.sorting - b.sorting);
  });

  return { features, assetsDomain, sectionTitle, featuresSorted };
});
