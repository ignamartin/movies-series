import type { Movie, Serie } from "~/models";

export interface CardProps {
    data: Movie | Serie;
    onClick?: () => void;
}