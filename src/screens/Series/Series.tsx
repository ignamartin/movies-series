import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { CardPage } from "~/components/Card";
import { Loading } from "~/components/Loading";
import { Pagination } from "~/components/Pagination";
import { ERROR_FETCH_DATA } from "~/constants";
import type { Movie, Serie } from "~/models";
import { getPopularSeries } from "~/services";
import { useModal } from "~/store";

export default function Series() {
  const { toggleState, setModalData } = useModal();
  const [page, setPage] = useState<number>();

  const {
    isPending: isPendingSeries,
    isError: isErrorSeries,
    data: series,
  } = useQuery({
    queryKey: ["trendingMovies", page],
    queryFn: async () => {
      const data = await getPopularSeries(page);
      return data;
    },
    placeholderData: keepPreviousData,
  });

  if (isErrorSeries) {
    toast.error(ERROR_FETCH_DATA);
  }

  const handleOpenModal = (data: Movie | Serie) => () => {
    setModalData({ data });
    toggleState();
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {isPendingSeries && <Loading />}
      {!isErrorSeries && (
        <>
          <h1 className="text-3xl font-bold text-white mb-8">
            Películas Populares
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {series?.results.map((serie) => (
              <CardPage
                key={serie.id}
                data={serie}
                onClick={handleOpenModal(serie)}
              />
            ))}
          </div>
          <Pagination
            setPage={setPage}
            currentPage={series?.page ?? 1}
            totalPages={series?.total_pages ?? 1}
          />
        </>
      )}
    </div>
  );
}
