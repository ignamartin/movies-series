import type { ApiResponse } from "~/models"
import { apiCall } from "../config/axiosClient"

export const getSeriesGenres = async () => {
  const { data } = await apiCall.get('genre/tv/list', {
    params: {
      language: 'es-AR'
    }
  })
  return data
}

export const getTrendingSeries = async (): Promise<ApiResponse> => {
  const { data } = await apiCall.get<ApiResponse>('trending/tv/day', {
    params: {
      language: 'es-AR'
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