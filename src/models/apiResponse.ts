import type { Movie } from "./movie";
import type { Serie } from "./serie";

type Data = Movie[] | Serie[]

export interface ApiResponse {
    page: number;
    results: Data;
    total_pages: number;
    total_results: number;
}
