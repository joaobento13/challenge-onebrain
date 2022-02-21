import api from "api";

export async function FlavorsService(): Promise<any> {
  const response = await api.get(`/flavors`);
  return response.data.flavors;
}

export async function DoughsService(): Promise<any> {
  const response = await api.get(`/doughs`);
  return response.data.doughs;
}

export async function SizesService(): Promise<any> {
  const response = await api.get(`/sizes`);
  return response.data.sizes;
}

export async function PriceService(params: any): Promise<any> {
  let paramsUrl: any[] = [];
  let lstParams: any[] = [];

  paramsUrl.push({ name: "flavor", value: params.flavor });
  paramsUrl.push({ name: "dough", value: params.dough });
  paramsUrl.push({ name: "size", value: params.size });

  paramsUrl.forEach((param) => {
    let txt = `${param.name}=${param.value}`;
    lstParams.push(txt);
  });

  const response = await api.get(`/price?${lstParams.join("&")}`);
  return response.data;
}
