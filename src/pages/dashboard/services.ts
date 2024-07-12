import api from "../../services/api.ts";
import {AxiosResponse} from "axios";
import {Product} from "../home/types.ts";

export async function getApiRecentProducts(): Promise<AxiosResponse<Product[], any>> {
    return await api.get('/products/recents')
}

export async function getApiRecommendedProducts(): Promise<AxiosResponse<Product[], any>> {
    return await api.get('/products/recommended')
}
