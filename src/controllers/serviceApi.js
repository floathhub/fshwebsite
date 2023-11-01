import { CreateApi, createApi } from "@reduxjs/toolkit/dist/query";
import { baseUrl } from "./config";
import axios from "axios";

export const getAllService = async () => {
  try {
    const res = await axios.get(`${baseUrl}/service/get-services`);
    if(res.data.success){
        return res;
    }
    else {
        return res
    }
  } catch (error) {
    console.log(error)
  }
};
