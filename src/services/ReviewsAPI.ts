import axios from "axios";

const baseURL = "https://manga-shelf-app.herokuapp.com/api";

const ReviewsApi = axios.create({
    baseURL:baseURL, 
    responseType: "json",
});

export default ReviewsApi;