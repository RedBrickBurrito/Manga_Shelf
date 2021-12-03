import axios from "axios";

const baseURL = process.env.REACT_APP_MANGASHELF_API_BASE_URL;

const MangaShelfAPI = axios.create({
  baseURL: baseURL,
  responseType: "json",
});

export default MangaShelfAPI;
