import { FaCircleInfo, FaHeart, FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RatingStar } from "~/components/RatingStar";
import type { Movie, Serie } from "~/models";
import { useFavourite, useModal } from "~/store";
import { getBackdropImage } from "~/utils";

export default function Modal() {
  const navigate = useNavigate();
  const { toggleState, modalData } = useModal();
  const { isFavourite, toggleFavourite } = useFavourite();
  const {
    id,
    title,
    vote_average,
    release_date,
    overview,
    backdrop_path,
    popularity,
  } = modalData as Movie | Serie;

  const handleClick = (id: number) => {
    toggleState();
    navigate(`/description/${id}`);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-slate-600 bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg max-w-xl w-full mx-auto overflow-hidden shadow-xl">
        <div className="relative">
          <img
            src={getBackdropImage(backdrop_path)}
            alt={title}
            className="w-full h-64 object-fit"
          />
          <button
            onClick={toggleState}
            className="absolute top-2 right-2 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700 transition-colors duration-300"
          >
            <FaX size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavourite(id);
              }}
              className={`p-2 rounded-full ${
                isFavourite(id) ? "bg-red-500" : "bg-gray-700"
              } hover:bg-red-600 transition-colors duration-300`}
            >
              <FaHeart
                size={24}
                className={isFavourite(id) ? "fill-current" : ""}
              />
            </button>
          </div>
          <p className="text-gray-300 mb-4">{overview}</p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Popularidad:</span>{" "}
            {popularity.toFixed(0)}
          </p>
          <div className="flex items-center mb-4">
            <RatingStar rating={vote_average} />
            <span className="ml-2 text-gray-300">
              {vote_average.toFixed(1)}
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            <span className="font-semibold">Fecha de estreno:</span>{" "}
            {release_date}
          </p>
          <button
            onClick={() => handleClick(id)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
          >
            <FaCircleInfo size={20} className="mr-2" />
            Ver información completa
          </button>
        </div>
      </div>
    </div>
  );
}

// poster_path
// media_type
