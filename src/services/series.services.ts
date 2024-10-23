import { apiCall } from "~/config/axiosClient"
import type { ApiResponse, Serie, SeriesCredits, SeriesDetails, SeriesDetailsBulkResponse } from "~/models"

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

export const getSeriesDetails = async (id: number): Promise<SeriesDetails> => {
  const { data } = await apiCall.get(`tv/${id}`, {
    params: {
      language: 'es-AR',
    }
  })

  const newData = {
    ...data,
    title: data.name,
    release_date: data.first_air_date,
  }

  return newData
}

export const getSeriesDetailsBulk = async (ids: number[]): Promise<SeriesDetailsBulkResponse> => {
  const seriesDetailsPromises = ids.map(id => getSeriesDetails(id));

  const seriesDetails = await Promise.all(seriesDetailsPromises);

  return { seriesDetails };
};

export const getSeriesCredits = async (id: number): Promise<SeriesCredits> => {
  const { data } = await apiCall.get(`tv/${id}/credits`, {
    params: {
      language: 'es-AR',
    }
  })

  return data
}