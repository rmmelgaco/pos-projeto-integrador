import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type AuthSessionType = {
    token: string
    setToken: (token: string) => void
    clearToken: () => void
}

export const useAuthSessionStore = create<AuthSessionType>()(
    persist(
        (set) => ({
            token: '',
            setToken: (token: string) => set((state) => ({...state, token})),
            clearToken: () => set((state) => ({...state, token: ''})),
        }), {
            name: 'auth-session-storage'
        }
    ))

