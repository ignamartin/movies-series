import { create } from 'zustand'
import type { FavouriteState } from '~/models'

export const useFavourite = create<FavouriteState>((set, get) => ({
    FavouriteState: [],
    addFavourite: (id) => set(state => ({ FavouriteState: [...state.FavouriteState, id] })),
    removeFavourite: (id) => set(state => ({ FavouriteState: state.FavouriteState.filter(item => item !== id) })),
    toggleFavourite: (id) => get().FavouriteState.includes(id) ? get().removeFavourite(id) : get().addFavourite(id),
    isFavourite: (id) => get().FavouriteState.includes(id),
}))
