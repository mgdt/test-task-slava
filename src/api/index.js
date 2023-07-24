import axios from "axios";

export const baseUrl = "https://test-task-frontend-2023.slava.digital";

export async function fetchFeatures() {
  try {
    const response = await axios.post(baseUrl);
    response.data.features.forEach((feature) => {
      if (feature.image !== null)
        feature.image = response.data.assets_domain + feature.image;
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
