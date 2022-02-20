import api from "api";

export async function OrderServices(): Promise<any> {
  const response = await api.get(`/option-of-the-day`);
  return response.data.option;
}
