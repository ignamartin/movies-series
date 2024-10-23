import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loading } from "~/components/Loading";
import { SwiperHome } from "~/components/Swiper";
import {
  ERROR_FETCH_DATA,
  MOVIES_BUTTON_TEXT,
  MOVIES_TITLE,
  SERIES_BUTTON_TEXT,
  SERIES_TITLE,
} from "~/constants";
import { getPopularMovies, getPopularSeries } from "~/services";

export default function Home() {
  const navigate = useNavigate();
  const {
    isPending: isPendingMovies,
    isError: isErrorMovies,
    data: movies,
  } = useQuery({
    queryKey: ["homeMovies"],
    queryFn: async () => {
      const data = await getPopularMovies();
      return data;
    },
  });

  const {
    isPending: isPendingSeries,
    isError: isErrorSeries,
    data: series,
  } = useQuery({
    queryKey: ["homeSeries"],
    queryFn: async () => {
      const data = await getPopularSeries();
      return data;
    },
  });

  if (isPendingMovies || isPendingSeries) return <Loading />;

  if (isErrorMovies || isErrorSeries) {
    toast.error(ERROR_FETCH_DATA);
  }

  return (
    <div className="container px-6 py-8 mx-auto flex flex-col min-h-screen">
      {movies && (
        <section aria-labelledby="popular-movies">
          <header className="flex justify-between items-center mb-6">
            <h2 id="popular-movies" className="text-3xl font-bold text-white">
              {MOVIES_TITLE}
            </h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              onClick={() => navigate("/movies")}
              aria-label="Ver todas las películas"
            >
              {MOVIES_BUTTON_TEXT}
            </button>
          </header>
          <SwiperHome data={movies.results} type="movie" />
        </section>
      )}
      {series && (
        <section aria-labelledby="popular-series" className="my-6">
          <header className="flex justify-between items-center mb-6">
            <h2 id="popular-series" className="text-3xl font-bold text-white">
              {SERIES_TITLE}
            </h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              onClick={() => navigate("/series")}
              aria-label="Ver todas las series"
            >
              {SERIES_BUTTON_TEXT}
            </button>
          </header>
          <SwiperHome data={series.results} type="serie" />
        </section>
      )}
    </div>
  );
}
