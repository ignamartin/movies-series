import { apiCall } from "~/config/axiosClient"
import type { ApiResponse } from "~/models"

export const getMovieGenres = async () => {
  const { data } = await apiCall.get('genre/movie/list', {
    params: {
      language: 'es-AR'
    }
  })
  return data
}

export const getPopularMovies = async (page: number = 1): Promise<ApiResponse> => {
  const { data } = await apiCall.get<ApiResponse>('movie/popular', {
    params: {
      page: page,
    }
  })
  return data
}

export const getSearchMovies = async (query: string) => {
  const { data } = await apiCall.get('search/movie', {
    params: {
      language: 'es-AR',
      query
    }
  })
  return data
}
