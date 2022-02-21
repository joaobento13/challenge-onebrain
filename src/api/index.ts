import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// arguments for reply are (status, data, headers)
mock.onGet("/option-of-the-day").reply(200, {
  option: {
    id: 1,
    name: "Marguerita",
    size: "tamanho médio",
    type: "massa fina",
    symbol: "M",
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

mock.onGet("/sizes").reply(200, {
  sizes: [
    {
      id: 1,
      name: "Pequeno",
      symbol: "P",
      size: "100",
    },
    {
      id: 2,
      name: "Média",
      symbol: "M",
      size: "150",
    },
    {
      id: 3,
      name: "Grande",
      symbol: "G",
      size: "200",
    },
  ],
});

mock.onGet(/price?.*/).reply((config) => {
  let newConfig = parseQueryString(config.url!);
  let price = 0;

  switch (newConfig.flavor) {
    case "marguerita":
      price = price + 10;
      break;
    case "portuguesa":
      price = price + 15;
      break;
    case "cogumelos":
      price = price + 20;
      break;
    case "festiva":
      price = price + 25;
      break;
    case "rústica":
      price = price + 30;
      break;
    default:
      price = price + 10;
  }

  switch (newConfig.dough) {
    case "grossa":
      price = price + 15;
      break;
    case "média":
      price = price + 10;
      break;
    case "fina":
      price = price + 5;
      break;
    default:
      price = price + 10;
  }

  switch (newConfig.size) {
    case "P":
      price = price + 5;
      break;
    case "M":
      price = price + 10;
      break;
    case "G":
      price = price + 15;
      break;
    default:
      price = price + 10;
  }

  return [200, price];
});

function parseQueryString(url: string) {
  const queryString = url.replace(/.*\?/, "");

  if (queryString === url || !queryString) {
    return null;
  }

  const urlParams = new URLSearchParams(queryString);
  const result: any = {};

  urlParams.forEach((val, key) => {
    if (result.hasOwnProperty(key)) {
      result[key] = [result[key], val];
    } else {
      result[key] = val;
    }
  });

  return result;
}

const api = axios.create();

export default api;
