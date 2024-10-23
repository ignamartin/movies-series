import type { CardProps, Movie, Serie } from "~/models";
import { useModal } from "~/store";
import { getPoster } from "~/utils";

export default function Card({ data, type = 'movie' }: CardProps) {
  const { toggleModalState, setModalData, setModalDataType } = useModal();
  const { poster_path, overview } = data;

  const handleOpenModal =
    (data: Movie | Serie, type: "movie" | "serie") => () => {
      setModalData({ data });
      setModalDataType(type);
      toggleModalState();
    };

  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mx-auto w-full h-94"
      onClick={handleOpenModal(data, type)}
    >
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
