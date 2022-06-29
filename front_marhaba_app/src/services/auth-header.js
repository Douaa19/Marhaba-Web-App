export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.myToken) {
    return {
      Authorization: `Bearer ${user.myToken}`,
      "Access-Control-Allow-Origin": true,
    };
  } else {
    return {};
  }
}
