import api from "../../services/api.ts";
import {FormEditProduct} from "../../pages/form-product-edit/types.ts";

export async function removeApiProduct(productId: string, token: string) {
    await api.delete(`/products/${productId}`, {
        headers: {
            Authorization: token
        }
    })
}

export async function editApiProduct(productId: string, product: FormEditProduct, token: string) {
    await api.put(`/products/${productId}`, product, {
        headers: {
            Authorization: token
        }
    })
}