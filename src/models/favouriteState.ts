export interface FavouriteState {
    FavouriteState: number[];
    addFavourite: (id: number) => void;
    removeFavourite: (id: number) => void;
    toggleFavourite: (id: number) => void;
    isFavourite: (id: number) => boolean;
}