import { apiCall } from "~/config/axiosClient"
import type { ApiResponse, MoviesCredits, MoviesDetails } from "~/models"
import type { MoviesDetailsBulkResponse } from "~/models/moviesDetailsBulk"

export const getPopularMovies = async (page: number = 1): Promise<ApiResponse> => {
  const { data } = await apiCall.get<ApiResponse>('movie/popular', {
    params: {
      page: page,
    }
  })

  return data
}

export const getMoviesDetails = async (id: number): Promise<MoviesDetails> => {
  const { data } = await apiCall.get(`movie/${id}`, {
    params: {
      language: 'es-AR',
    }
  })

  return data
}

export const getMoviesDetailsBulk = async (ids: number[]): Promise<MoviesDetailsBulkResponse> => {
  const moviesDetailsPromises = ids.map(id => getMoviesDetails(id));

  const moviesDetails = await Promise.all(moviesDetailsPromises);

  return { moviesDetails };
};

export const getMoviesCredits = async (id: number): Promise<MoviesCredits> => {
  const { data } = await apiCall.get(`movie/${id}/credits`, {
    params: {
      language: 'es-AR',
    }
  })

  return data
}