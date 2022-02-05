import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: process.env.REACT_APP_YTB_API_KEY,
  },
  headers:{}
});

export default request 