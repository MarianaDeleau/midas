import axios from "axios";

const apiNews = axios.create({
  baseURL: "http://webhose.io/filterWebContent?token=4380d378-8fbc-4fab-9d96-ca4984f7d1fd&format=json&sort=crawled&q=coronavirus%20casos%20positivos%20%20language%3Aspanish%20thread.country%3AAR",
});




export { apiNews };