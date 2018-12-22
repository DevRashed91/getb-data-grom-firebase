import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-blog-638f6.firebaseio.com/"
});

export default instance;
