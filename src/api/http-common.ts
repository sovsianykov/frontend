import axios from "axios";


export const request = axios.create({
  baseURL:'https://mern-fullstack-shop.herokuapp.com/api/',
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
