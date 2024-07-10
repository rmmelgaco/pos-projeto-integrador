import api from "../../services/api.ts";
import {Product} from "../home/types.ts";
import {AxiosResponse} from "axios";

export async function getApiAllRecentProducts(): Promise<AxiosResponse<Product[]>> {
    return await api.get('/products/recents-all')
}