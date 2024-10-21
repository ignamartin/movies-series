import type { CardProps } from "~/models";

export const getPoster = (poster_path: string) => {
    if (!poster_path) {
        return "https://via.placeholder.com/342x513";
    }
    return `https://image.tmdb.org/t/p/w342/${poster_path}`;
};

export const getDisplayName = ({data}: CardProps) => {
    if ("title" in data && data.title) {
        return data.title as string;
    }

    if ("name" in data && data.name) {
        return data.name as string;
    }

    return "";
};