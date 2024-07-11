import api from "../../services/api.ts";
import {RegisterForm} from "./types.ts";

export async function registerUser(newUser: RegisterForm) {
    return await api.post('/register', newUser )
}