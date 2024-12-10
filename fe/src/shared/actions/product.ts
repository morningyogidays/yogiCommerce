import {DeleteMethod, GetMethod, PostMethod} from "@/shared/actions/fetchAction";

const BASE_API = "product";

export async function createProduct(data: any, headers: any) {
  try {
    return PostMethod(`${BASE_API}`, headers, data);
  } catch (e) {
    return {message: "Failed to Create Route"};
  }
}

export async function getProduct(params: Record<string, string>, headers?: any) {
  try {
    const queryString = new URLSearchParams(params).toString();
    return GetMethod(`${BASE_API}?${queryString}`, headers);
  } catch (e) {
    return { message: "Failed to Get Product" };
  }
}


export async function getProductByUID(id: string, headers?: any) {
  try {
    return GetMethod(`${BASE_API}/${id}`, headers);
  } catch (e) {
    return { message: "Failed to Get Product By UID" };
  }
}
