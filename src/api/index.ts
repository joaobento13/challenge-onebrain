import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/option-of-the-day").reply(200, {
  option: {
    id: 1,
    name: "Marguerita",
    size: "tamanho médio",
    type: "massa fina",
  },
});

mock.onGet("/flavors").reply(200, {
  flavors: [
    {
      id: 1,
      name: "marguerita",
      img: "pizza1.png",
    },
    {
      id: 2,
      name: "portuguesa",
      img: "pizza2.png",
    },
    {
      id: 3,
      name: "cogumelos",
      img: "pizza3.png",
    },
    {
      id: 4,
      name: "festiva",
      img: "pizza4.png",
    },
    {
      id: 5,
      name: "rústica",
      img: "pizza5.webp",
    },
  ],
});

mock.onGet("/doughs").reply(200, {
  doughs: [
    {
      id: 1,
      name: "Massa grossa",
      size: "10",
      weight: "bold",
    },
    {
      id: 2,
      name: "Massa média",
      size: "5",
      weight: "normal",
    },
    {
      id: 3,
      name: "Massa fina",
      size: "2.5",
      weight: "300",
    },
  ],
});

const api = axios.create();

export default api;
