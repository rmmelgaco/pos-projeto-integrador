import api from "../../services/api.ts";

export async function getApiMyProducts(token: string) {
    return await api.get('/my-products', {
        headers: {
            Authorization: token
        }
    })
}