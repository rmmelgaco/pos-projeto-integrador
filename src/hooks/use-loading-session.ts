import {create} from "zustand";

type LoadingType = {
    loading: boolean
    setLoading: (loading: boolean) => void
}

export const useLoadingSession
    = create<LoadingType>((set) => (
    {
        loading: false,
        setLoading: (loading: boolean) => set((state) => ({...state, loading}))
    }))
