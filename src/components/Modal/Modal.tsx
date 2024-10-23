import { useEffect } from "react";
import { FaCircleInfo, FaHeart, FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RatingStar } from "~/components/RatingStar";
import { BUTTON_TEXT, POPULARITY, RELEASE_DATE } from "~/constants";
import type { Movie, Serie } from "~/models";
import { useFavourite, useModal } from "~/store";
import { getBackdropImage, getPoster } from "~/utils";

export default function Modal() {
  const navigate = useNavigate();
  const { toggleModalState, modalData, modalDataType } = useModal();
  const { isFavourite, addFavourite, removeFavourite } = useFavourite();
  const {
    id,
    title,
    vote_average,
    release_date,
    overview,
    backdrop_path,
    poster_path,
    popularity,
  } = modalData as Movie | Serie;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = (id: number) => {
    toggleModalState();
    navigate(`/description/${id}?type=${modalDataType}`);
  };

  const favouriteHandler = (id: number) => {
    if (isFavourite(id)) {
      removeFavourite(id);
    } else {
      addFavourite(id, modalDataType);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-600 bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full sm:max-w-2xl mx-auto overflow-y-auto max-h-[90vh] shadow-xl">
        <div className="relative">
          <img
            src={getBackdropImage(backdrop_path)}
            alt={title}
            className="w-full h-48 object-cover sm:h-64"
          />
          <button
            onClick={toggleModalState}
            className="absolute top-2 right-2 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700 transition-colors duration-300"
          >
            <FaX size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
              <img
                src={getPoster(poster_path)}
                alt={title}
                className="w-full rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full sm:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {title}
                </h2>
                <button
                  onClick={() => favouriteHandler(id)}
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
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {overview}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">{POPULARITY}</span>{" "}
                {popularity.toFixed(0)}
              </p>
              <div className="flex items-center mb-4">
                <RatingStar rating={vote_average} />
                <span className="ml-2 text-gray-300">
                  {vote_average.toFixed(1)}
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold">{RELEASE_DATE}</span>{" "}
                {release_date}
              </p>
              <button
                onClick={() => handleClick(id)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center mt-4 sm:mt-0"
              >
                <FaCircleInfo size={20} className="mr-2" />
                {BUTTON_TEXT}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// media_type
