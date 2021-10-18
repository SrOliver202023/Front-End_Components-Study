import axios from "axios";

const api = axios.create({baseURL: "https://sharethinks-back-end.herokuapp.com"});

export default api;