import axios from "axios";
const APP_URL = "http://localhost:8080/announce/announce";

export async function deleteM(id, header) {
  return await axios.delete(`${APP_URL}/${id}`, {
    headers: { Authorization: `Bearer ${header}` },
  });
}

export async function createMeal(data, header) {
  const formData = new FormData();

  formData.append("image", data.images[0], data.images[0].name);

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("price", data.price);
  formData.append("category", data.category);

  axios.post(`http://localhost:8080/admin/create/announce`, formData, {
    headers: {
      Authorization: `Breare ${header}`,
      "content-type": "multipart/form-data",
    },
  });
  // .then((res) => {
  //   return res;
  // });
}

export async function getMealById(id, header) {
  const meal = await axios.get(`${APP_URL}/${id}`, {
    headers: { Authorization: `Bearer ${header}` },
  });
  if (meal) {
    return meal.data;
  }
}

export async function updateMeal(id, data, header) {
  await axios
    .put(
      `${APP_URL}/${id}`,
      { data },
      {
        headers: { Authorization: `Breare ${header}` },
      }
    )
    .then((res) => {
      return res.data;
    });
}
