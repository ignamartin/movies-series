import { create } from 'zustand'
import type { FavouriteState } from '~/models'

export const useFavourite = create<FavouriteState>((set, get) => ({
    favouriteState: [],
    addFavourite: (id, type) => {
        const isAlreadyFavourite = get().favouriteState.some(item => item.id === id);
        if (!isAlreadyFavourite) {
            set(state => ({ favouriteState: [...state.favouriteState, { id, type }] }));
        }
    },
    removeFavourite: (id) => {
        set(state => ({ favouriteState: state.favouriteState.filter(item => item.id !== id) }));
    },
    isFavourite: (id) => get().favouriteState.some(item => item.id === id),
    getFavouritesByType: (type) => {
        return get().favouriteState.filter(item => item.type === type);
    },
}));