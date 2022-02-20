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
