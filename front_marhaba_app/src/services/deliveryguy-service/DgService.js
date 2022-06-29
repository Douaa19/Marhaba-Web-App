import axios from "axios";
const APP_URL = "http://localhost:8080/admin";

export async function accept(id, header) {
  await axios
    .post(
      `${APP_URL}/acceptDeliveryguy`,
      { id },
      {
        headers: { Authorization: `Bearer ${header}` },
      }
    )
    .then((res) => {
      return console.log(res.data.message);
    });
}

export async function refuse(id, header) {
  await axios
    .post(
      `${APP_URL}/refuseDeliveryguy`,
      { id },
      {
        headers: { Authorization: `Bearer ${header}` },
      }
    )
    .then((res) => {
      return console.log(res.data.message);
    });
}

export async function deleteDg(id, header) {
  await axios
    .delete(
      `${APP_URL}/deleteDeliveryguy/${id}`,
      {
        headers: { Authorization: `Bearer ${header}` }
      }
    )
    .then((res) => {
      return console.log(res.data.message);
    });
}
