import type { Movie, Serie } from ".";

export interface DataProps {
    data: (Movie | Serie)[];
    type?: "movie" | "serie";
}