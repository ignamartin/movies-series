import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft } from "react-icons/fa6";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Loading } from "~/components/Loading";
import { RatingStar } from "~/components/RatingStar";
import {
  DESCRIPTION_CAST,
  DESCRIPTION_CREDITS,
  DESCRIPTION_CREW,
  DESCRIPTION_DETAILS,
  DESCRIPTION_GENRES,
  DESCRIPTION_RELEASE_DATE,
  DESCRIPTION_TITLE,
  ERROR_FETCH_DATA,
} from "~/constants";
import type { CastMember, CrewMember, Genre } from "~/models";
import {
  getMoviesCredits,
  getMoviesDetails,
  getSeriesCredits,
  getSeriesDetails,
} from "~/services";
import { getBackdropImage, getPoster } from "~/utils";

export default function Description() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const fetchData = async () => {
    if (type === "movie") {
      const details = await getMoviesDetails(Number(id));
      const credits = await getMoviesCredits(Number(id));
      return { details, credits };
    } else {
      const details = await getSeriesDetails(Number(id));
      const credits = await getSeriesCredits(Number(id));
      return { details, credits };
    }
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["description", id],
    queryFn: fetchData,
  });

  if (isPending) return <Loading />;

  if (isError) {
    toast.error(ERROR_FETCH_DATA);
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {!isError && data && (
        <>
          <div className="relative h-96">
            <img
              src={getBackdropImage(data?.details.backdrop_path)}
              alt={data?.details.title}
              className="w-full h-full object-fit"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="container mx-auto px-6 py-4">
                <h1 className="text-4xl font-bold text-white mb-2">
                  {data?.details.title}
                </h1>
                <RatingStar rating={data?.details.vote_average} />
                <button
                  onClick={() => window.history.back()}
                  className="absolute top-4 bg-gray-800 bg-opacity-70 p-2 rounded-full text-white hover:bg-opacity-100 transition-all duration-300"
                >
                  <FaArrowLeft size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={getPoster(data?.details.poster_path)}
                  alt={data?.details.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {DESCRIPTION_TITLE}
                </h2>
                <p className="text-gray-300 mb-6">{data?.details.overview}</p>

                <h2 className="text-2xl font-bold text-white mb-4">
                  {DESCRIPTION_DETAILS}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {DESCRIPTION_RELEASE_DATE}
                    </h3>
                    <p className="text-gray-300">
                      {data?.details.release_date}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {DESCRIPTION_GENRES}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {data?.details.genres.map((genre: Genre) => (
                        <span
                          key={genre.id}
                          className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {data?.credits.cast.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {DESCRIPTION_CREDITS}
                    </h2>
                    <p className="text-xl font-bold text-white mb-4">
                      {DESCRIPTION_CAST}
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-6">
                      {data?.credits.cast.map((credit: CastMember) => (
                        <li key={credit.id}>
                          {credit.name} - {credit.character}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {data?.credits.crew.length > 0 && (
                  <>
                    <p className="text-xl font-bold text-white mb-4">
                      {DESCRIPTION_CREW}
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-6">
                      {data?.credits.crew.map((credit: CrewMember) => (
                        <li key={credit.id}>
                          {credit.job} - {credit.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
            <hr className="mt-11 border-gray-700" />
          </div>
        </>
      )}
    </div>
  );
}
