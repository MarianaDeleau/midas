import axios from "axios";

const apiNews = axios.create({
  baseURL: "http://localhost:8000/api/noticias",
});




export { apiNews };