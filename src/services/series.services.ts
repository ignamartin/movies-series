import { apiCall } from "~/config/axiosClient"
import type { ApiResponse } from "~/models"

export const getSeriesGenres = async () => {
  const { data } = await apiCall.get('genre/tv/list', {
    params: {
      language: 'es-AR'
    }
  })
  return data
}

export const getPopularSeries = async (page: number = 1): Promise<ApiResponse> => {
  const { data } = await apiCall.get<ApiResponse>('tv/popular', {
    params: {
      page: page,
    }
  })
  return data
}

export const getSearchSeries = async (query: string) => {
  const { data } = await apiCall.get('search/tv', {
    params: {
      language: 'es-AR',
      query
    }
  })
  return data
}