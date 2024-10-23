export interface Serie {
    adult: boolean;
    backdrop_path: string;
    genre_ids?: number[];
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
    title: string;
    release_date: string;
}