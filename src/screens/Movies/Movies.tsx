import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { CardPage } from "~/components/Card";
import { Loading } from "~/components/Loading";
import { Pagination } from "~/components/Pagination";
import { ERROR_FETCH_DATA, MOVIES_TITLE } from "~/constants";
import type { Movie, Serie } from "~/models";
import { getPopularMovies } from "~/services";
import { useModal } from "~/store";

export default function Movies() {
  const { toggleModalState, setModalData, setModalDataType } = useModal();
  const [page, setPage] = useState<number>(1);

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
  });

  if (isPendingMovies) return <Loading />;

  if (isErrorMovies) {
    toast.error(ERROR_FETCH_DATA);
  }

  const handleOpenModal = (data: Movie | Serie) => () => {
    setModalData({ data });
    setModalDataType("movie");
    toggleModalState();
  };

  return (
    <div className="container min-h-screen mx-auto px-6 py-8">
      {movies && (
        <section>
          <h1 className="text-3xl font-bold text-white mb-8">{MOVIES_TITLE}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies?.results.map((movie) => (
              <CardPage
                key={movie.id}
                data={movie}
                onClick={handleOpenModal(movie)}
                aria-label={`Ver detalles de ${movie.title}`}
              />
            ))}
          </div>
          <Pagination
            setPage={setPage}
            currentPage={movies?.page ?? 1}
            totalPages={movies?.total_pages ?? 1}
          />
        </section>
      )}
    </div>
  );
}
