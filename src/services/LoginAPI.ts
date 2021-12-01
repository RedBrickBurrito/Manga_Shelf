import axios from "axios";

const baseURL = "https://manga-shelf-app.herokuapp.com/api";

const LoginAPI = axios.create({
  baseURL: baseURL,
  responseType: "json",
});

export default LoginAPI;
