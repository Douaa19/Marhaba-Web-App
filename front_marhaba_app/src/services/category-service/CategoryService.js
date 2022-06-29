import axios from "axios";
const APP_URL = "http://localhost:8080/category/";

export default async function createCategory(name, header) {
  let res = await axios.post(`${APP_URL}`, name, {
    headers: { Authorization: `Bearer ${header}` },
  });
  return res;
}

export async function deleteCategory(id, header) {
  return await axios.delete(`${APP_URL}`, {
    headers: { Authorization: `Bearer ${header}` },
    data: { id: id },
  });
}
