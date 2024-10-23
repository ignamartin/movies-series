export const getPoster = (poster_path: string) => {
    if (!poster_path) {
        return "https://via.placeholder.com/342x513";
    }
    return `https://image.tmdb.org/t/p/w342/${poster_path}`;
};

export const getBackdropImage = (backdrop_path: string) => {
    if (!backdrop_path) {
        return "https://via.placeholder.com/342x513";
    }
    return `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
}
