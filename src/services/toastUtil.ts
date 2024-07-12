import {toast} from "react-toastify";

export function showErrorMessage(mensagem: string, error: any) {
    toast.error(`${mensagem} - ${error.response.data.message || error.response.data.error || error.message}`)
}