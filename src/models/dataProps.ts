import type { Movie, Serie } from ".";

export interface DataProps {
    data: (Movie | Serie)[];
}

export interface CardProps {
    data: Movie | Serie;
}