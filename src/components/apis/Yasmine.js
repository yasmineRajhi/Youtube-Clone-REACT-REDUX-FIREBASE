import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyB-xgI9nBpQUCXOoMmN2l5iNjaJyPZ0BO4",
  },
  headers:{}
});

export default request 