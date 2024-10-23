interface FavouriteData {
    id: number;
    type: 'serie' | 'movie';
}

export interface FavouriteState {
    favouriteState: FavouriteData[];
    addFavourite: (id: number, type: 'serie' | 'movie') => void;
    removeFavourite: (id: number) => void;
    isFavourite: (id: number) => boolean;
    getFavouritesByType: (type: 'serie' | 'movie') => FavouriteData[];
}