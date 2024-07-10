import api from "../../services/api.ts";
import {AxiosResponse} from "axios";
import {Product} from "./types.ts";

export async function getApiRecentProducts(): Promise<AxiosResponse<Product[], any>> {
    return await api.get('/products/recents')
}