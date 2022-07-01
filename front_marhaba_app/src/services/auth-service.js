import axios from "axios";
import authHeader from "./auth-header";
const user = JSON.parse(localStorage.getItem("user"));
const APP_URL = "http://localhost:8080";

export function login(email, password) {
  return axios
    .post(`http://localhost:8080/auth/login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.myToken) {
        localStorage.setItem("user", JSON.stringify(response.data.myToken));
      }
      return response.data;
    });
}

export function logout() {
  localStorage.removeItem("user");
}

export function register(username, email, password, repeated_password, role) {
  return axios.post(
    `${APP_URL}/register`,
    {
      username,
      email,
      password,
      repeated_password,
      role,
    },
    {
      headers: {
        Authorization: `Bearer ${user.myToken}`,
        // "Access-Control-Allow-Origin": true,
      },
    }
  );
}
