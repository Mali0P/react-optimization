import axios from "axios";

let api = "https://jsonplaceholder.typicode.com/photos";
export const fetchImages = async () => {
  try {
    let res = await axios.get(api);
    return res.data.slice(0,10);
  } catch (error) {
    return error.message;
  }
};
