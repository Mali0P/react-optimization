import axios from "axios";

let api = "https://api.escuelajs.co/api/v1/products";
export const fetchImages = async () => {
  try {
    let res = await axios.get(api);
    return res.data.slice(0, 9);
  } catch (error) {
    return error.message;
  }
};
