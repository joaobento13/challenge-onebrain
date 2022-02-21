import api from "api";

export async function FlavorsService(): Promise<any> {
  try {
    const response = await api.get(`/flavors`);
    return response?.data?.flavors;
  } catch (error) {
    console.warn("FlavorsService error ", error);
    return error;
  }
}

export async function DoughsService(): Promise<any> {
  try {
    const response = await api.get(`/doughs`);
    return response?.data?.doughs;
  } catch (error) {
    console.warn("DoughsService error ", error);
    return error;
  }
}

export async function SizesService(): Promise<any> {
  try {
    const response = await api.get(`/sizes`);
    return response?.data?.sizes;
  } catch (error) {
    console.warn("SizesService error ", error);
    return error;
  }
}

export async function PriceService(params: any): Promise<any> {
  try {
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
    return response?.data;
  } catch (error) {
    console.warn("PriceService error ", error);
    return error;
  }
}
