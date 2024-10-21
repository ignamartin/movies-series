import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loading } from "~/components/Loading";
import { SwiperHome } from "~/components/Swiper";
import { ERROR_FETCH_DATA } from "~/constants";
import { getPopularMovies, getPopularSeries } from "~/services";

export default function Home() {
  const {
    isPending: isPendingMovies,
    isError: isErrorMovies,
    data: movies,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: async () => {
      const data = await getPopularMovies();
      return data;
    },
    placeholderData: keepPreviousData,
  });

  const {
    isPending: isPendingSeries,
    isError: isErrorSeries,
    data: series,
  } = useQuery({
    queryKey: ["trendingSeries"],
    queryFn: async () => {
      const data = await getPopularSeries();
      return data;
    },
    placeholderData: keepPreviousData,
  });

  if (isErrorMovies || isErrorSeries) {
    toast.error(ERROR_FETCH_DATA);
  }

  return (
    <div className="container px-6 py-8 mx-auto flex flex-col min-h-screen">
      {(isPendingMovies || isPendingSeries) && <Loading />}
      {movies && (
        <>
          <h2 className="text-3xl font-bold text-white mb-8">
            Películas Populares
          </h2>
          <div>{movies && <SwiperHome data={movies.results} />}</div>
        </>
      )}
      {series && (
        <>
          <h2 className="text-3xl font-bold text-white my-8">
            Series Populares
          </h2>
          <div>{series && <SwiperHome data={series.results} />}</div>
        </>
      )}
    </div>
  );
}
