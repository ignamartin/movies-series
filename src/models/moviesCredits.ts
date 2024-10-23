import type { CastMember, CrewMember } from "~/models";

export interface MoviesCredits {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
}
