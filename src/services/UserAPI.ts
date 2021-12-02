import axios from "axios";

const baseURL = "https://manga-shelf-app.herokuapp.com/api";

const UserApi = axios.create({
    baseURL:baseURL, 
    responseType: "json",
});

export default UserApi;