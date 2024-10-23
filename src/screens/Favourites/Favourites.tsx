import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { CardPage } from "~/components/Card";
import { Loading } from "~/components/Loading";
import {
  ERROR_FETCH_DATA,
  FAVOUTIRE_SUBTITLE,
  FAVOUTIRE_TITLE,
  MOVIES,
  SERIES,
} from "~/constants";
import type { Movie, Serie } from "~/models";
import { getMoviesDetailsBulk, getSeriesDetailsBulk } from "~/services";
import { useFavourite, useModal } from "~/store";

export default function Favourites() {
  const { toggleModalState, setModalData, setModalDataType } = useModal();
  const getFavouritesByType = useFavourite(
    (state) => state.getFavouritesByType
  );

  const fetchMoviesData = async () => {
    const movies = await getMoviesDetailsBulk(
      getFavouritesByType("movie").map((movie) => movie.id)
    );
    return movies;
  };

  const fetchSeriesData = async () => {
    const series = await getSeriesDetailsBulk(
      getFavouritesByType("serie").map((serie) => serie.id)
    );
    return series;
  };

  const {
    isPending: isPendingMovies,
    isError: isErrorMovies,
    data: moviesResponse,
  } = useQuery({
    queryKey: ["favouriteMovies"],
    queryFn: fetchMoviesData
  });

  const {
    isPending: isPendingSeries,
    isError: isErrorSeries,
    data: seriesResponse,
  } = useQuery({
    queryKey: ["favouriteSeries"],
    queryFn: fetchSeriesData
  });

  if (isPendingMovies || isPendingSeries) return <Loading />;

  if (isErrorMovies || isErrorSeries) {
    toast.error(ERROR_FETCH_DATA);
  }

  const handleOpenModal =
    (data: Movie | Serie, type: "movie" | "serie") => () => {
      setModalData({ data });
      setModalDataType(type);
      toggleModalState();
    };

  const movies = moviesResponse?.moviesDetails || [];
  const series = seriesResponse?.seriesDetails || [];

  const hasNoFavourites = !movies?.length && !series?.length;

  return (
    <div className="container min-h-screen mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">{FAVOUTIRE_TITLE}</h1>
      {(!isPendingMovies || !isPendingSeries) && hasNoFavourites && (
        <p className="text-xl text-white">{FAVOUTIRE_SUBTITLE}</p>
      )}
      {movies && movies.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-white mb-2">{MOVIES}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies?.map((movie: Movie) => (
              <CardPage
                key={movie.id}
                data={movie}
                onClick={handleOpenModal(movie, "movie")}
                aria-label={`Ver detalles de ${movie.title}`}
              />
            ))}
          </div>
        </section>
      )}
      {series && series.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-white mb-2 mt-6">{SERIES}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {series?.map((serie: Serie) => (
              <CardPage
                key={serie.id}
                data={serie}
                onClick={handleOpenModal(serie, "serie")}
                aria-label={`Ver detalles de ${serie.title}`}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
