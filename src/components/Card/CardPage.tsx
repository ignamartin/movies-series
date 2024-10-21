import type { CardProps } from "~/models";
import { getDisplayName, getPoster } from "~/utils";
import { RatingStar } from "../RatingStar/RatingStar";

export default function CardPage({ data }: CardProps) {
  const { poster_path, overview, vote_average } = data;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <picture>
        <img
          src={getPoster(poster_path)}
          alt={overview}
          className="w-full rounded-t-lg h-80 object-fit"
        />
      </picture>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white truncate mb-2">
          {getDisplayName({ data })}
        </h2>
        <div className="flex justify-between items-center">
          <RatingStar rating={vote_average} />
          <span className="text-sm text-gray-300">
            {vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
