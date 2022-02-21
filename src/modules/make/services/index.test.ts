import { DoughsService, FlavorsService, SizesService, PriceService } from ".";

test("testing flavors service", async () => {
  const response = await FlavorsService();
  expect(response).toBeTruthy();
  expect(response).toStrictEqual([
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
  ]);
  expect(response).toContainEqual({
    id: 4,
    name: "festiva",
    img: "pizza4.png",
  });
});

test("testing doughs service", async () => {
  const response = await DoughsService();
  expect(response).toBeTruthy();
  expect(response).toStrictEqual([
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
  ]);
  expect(response).toContainEqual({
    id: 3,
    name: "Massa fina",
    size: "2.5",
    weight: "300",
  });
});

test("testing sizes service", async () => {
  const response = await SizesService();
  expect(response).toBeTruthy();
  expect(response).toBeTruthy();
  expect(response).toStrictEqual([
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
  ]);
  expect(response).toContainEqual({
    id: 3,
    name: "Grande",
    symbol: "G",
    size: "200",
  });
});

test("testing price service", async () => {
  const response = await PriceService({
    flavor: "marguerita",
    dough: "fina",
    size: "M",
  });
  expect(response).toBeTruthy();
  expect(response).toStrictEqual(25);
});
