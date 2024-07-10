import {AxiosResponse} from "axios";
import {Product} from "../home/types.ts";
import api from "../../services/api.ts";

export async function getApiProductById(productId: string): Promise<AxiosResponse<Product>> {
    return await api.get(`/products/${productId}`)
}