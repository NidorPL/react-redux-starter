import axios from "axios";
import axiosRetry from "axios-retry";

export const http = axios.create({
  baseURL: "https://....com/",
  timeout: 30000,
  headers: {},
  proxy: {
    host: '' +
        'https://....com/',
    port: 80,
  }
});

axiosRetry(axios, { retries: 3 });

export const api = {

  getSomething: ({ params }) =>
    http(`/something`, {
      params: { limit: 20, ...params }
    }),
};

window.api =  api