import { apiCall } from "~/config/axiosClient"
import type { ApiResponse, Serie } from "~/models"

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

  const mapSeries = (data.results as Serie[]).map((serie: Serie) => {
    return {
      ...serie,
      title: serie.name,
      release_date: serie.first_air_date,
    }
  })

  return {
    ...data,
    results: mapSeries,
  }
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