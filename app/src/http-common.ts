import axios from "axios";

export default axios.create({
  baseURL: `https://contacts-typescript.herokuapp.com/api`,
  headers: {
    "Content-type": "application/json"
  }
});