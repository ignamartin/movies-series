import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { Pagination } from "~/components/Pagination";
import { CardPage } from "~/components/Card";
import { Loading } from "~/components/Loading";
import { ERROR_FETCH_DATA } from "~/constants";
import { getPopularMovies } from "~/services";

export default function Movies() {
  const [page, setPage] = useState<number>();

  const {
    isPending: isPendingMovies,
    isError: isErrorMovies,
    data: movies,
  } = useQuery({
    queryKey: ["trendingMovies", page],
    queryFn: async () => {
      const data = await getPopularMovies(page);
      return data;
    },
    placeholderData: keepPreviousData,
  });

  if (isErrorMovies) {
    toast.error(ERROR_FETCH_DATA);
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {isPendingMovies && <Loading />}
      {!isErrorMovies && (
        <>
          <h1 className="text-3xl font-bold text-white mb-8">
            Películas Populares
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies?.results.map((movie) => (
              <CardPage key={movie.id} data={movie} />
            ))}
          </div>
          <Pagination
            setPage={setPage}
            currentPage={movies?.page ?? 1}
            totalPages={movies?.total_pages ?? 1}
          />
        </>
      )}
    </div>
  );
}
