import axios from "axios";
const ORDER_URL = "http://localhost:4000/admin/commands";
const NEW_COMMAND_URL = "http://localhost:8080/command/create";
const UPDATESTATUS_URL = "http://localhost:8080/command/updateStatus";

// Get one order
export async function getOredrById(id, header) {
  return await axios
    .get(`http://localhost:8080/command/command/${id}`, {
      headers: { Authorization: `Beare ${header}` },
    })
    .then((res) => console.log(res.data));
}

// Delete one order
export async function deleteOrd(id, header) {
  await axios.delete(`${ORDER_URL}/${id}`, {
    headers: { Authorization: `Bearer ${header}` },
  });
}

// Create command product
export async function createCommand(data, header) {
  return await axios
    .post(`${NEW_COMMAND_URL}`, data, {
      headers: { Authorization: `Beare ${header}` },
    })
    .then((res) => {
      return res;
    });
}

// Update command status
export async function updateOredr(command_id, deliveryGuy_id, header) {
  await axios
    .put(
      `${UPDATESTATUS_URL}/${command_id}`,
      { deliveryGuy_id },
      {
        headers: { Authorization: `Bearer ${header}` },
      }
    )
    .then((res) => {
      return res.data;
    });
}
