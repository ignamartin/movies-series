import type { CardProps } from "~/models";
import { getPoster } from "~/utils";

export default function Card({ data }: CardProps) {
  const { poster_path, overview } = data;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mx-auto w-full h-94">
      <picture>
        <img
          src={getPoster(poster_path)}
          alt={overview}
          className="w-full rounded-t-lg h-60 object-fit"
        />
      </picture>
      <div className="p-4">
        <h2 className="font-semibold text-white truncate mb-2">{data.title}</h2>
      </div>
    </div>
  );
}
