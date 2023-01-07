import axios from "axios";


export const request = axios.create({
  baseURL:'https://mern-store-7doz.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      return JSON.parse(data);
    },
  ],
})
