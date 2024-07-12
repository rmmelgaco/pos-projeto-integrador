import api from "../../services/api.ts";
import {LoginForm} from "./types.ts";

export async function auth(loginForm: LoginForm) {
    return await api.post('/auth', loginForm)
}