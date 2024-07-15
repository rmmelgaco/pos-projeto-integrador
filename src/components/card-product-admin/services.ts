import api from "../../services/api.ts";

export async function removeApiProduct(productId: string, token: string) {
    await api.delete(`/products/${productId}`, {
        headers: {
            Authorization: token
        }
    })
}