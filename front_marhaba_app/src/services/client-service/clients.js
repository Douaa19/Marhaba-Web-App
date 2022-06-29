import axios from "axios";
const CLIENT_URL = "http://localhost:8080/clients/client";

export function deletClient(id, header) {
  axios.delete(`${CLIENT_URL}/${id}`, {
    headers: { Authorization: `Bearer ${header}` },
  });
}
