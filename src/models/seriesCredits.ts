import type { CastMember, CrewMember } from "~/models";

export interface SeriesCredits {
    cast: CastMember[];
    crew: CrewMember[];
    id: number;
}
