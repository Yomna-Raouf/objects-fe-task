import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
const CommonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const API = axios.create({
  baseURL: BASE_URL,
  headers: CommonHeaders
});

export { API };