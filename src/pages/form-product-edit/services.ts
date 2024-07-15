import api from "../../services/api.ts";
import {FormEditProduct} from "./types.ts";

export async function saveApiProduct(newProduct: FormEditProduct, token: string) {
    return await api.post('/products', newProduct, {
        headers: {
            Authorization: token
        }
    })
}