import axios from "axios";

const BASE_URL = "http://sva.talana.com:8000/api";

  const getProducts = async () => {
    try {

      const response = await axios.get(`${BASE_URL}/product`);
      return response.data;

    } catch (error) {
      console.error(error);
      return error;
    }
  }

  const getCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product-category`);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }


export default {getProducts, getCategories}