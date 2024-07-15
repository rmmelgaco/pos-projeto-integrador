import api from "../../services/api.ts";
import {FormNewProduct} from "./types.ts";

export async function saveApiProduct(newProduct: FormNewProduct, token: string) {
    return await api.post('/products', newProduct, {
        headers: {
            Authorization: token
        }
    })
}