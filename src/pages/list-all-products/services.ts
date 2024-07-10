import api from "../../services/api.ts";
import {Product} from "../home/types.ts";
import {AxiosResponse} from "axios";

export async function getApiAllProducts(): Promise<AxiosResponse<Product[]>> {
    return await api.get('/products')
}

export async function getApiAllProductsOrderedByPrice(orderType: "descending" | "ascending"): Promise<AxiosResponse<Product[]>> {
    return await api.get(`/products?order=${orderType}`)
}