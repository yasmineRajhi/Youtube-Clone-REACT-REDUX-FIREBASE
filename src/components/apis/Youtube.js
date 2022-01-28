import axios from "axios";
const KEY = "AIzaSyB-xgI9nBpQUCXOoMmN2l5iNjaJyPZ0BO4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
