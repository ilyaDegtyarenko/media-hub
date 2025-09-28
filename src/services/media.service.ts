import axiosInstance from '@/api/axiosInstance'
import mediaApi from '@/api/endpoints/media.api.ts'
import type { AxiosResponse } from 'axios'
import type * as mediaTypes from '@/ts/types/media.ts'

export const mediaService = {
  getChannels: (): Promise<AxiosResponse<mediaTypes.GetChannelsResponse>> => {
    return mediaApi(axiosInstance).getChannels()
  },
  openChannelStream: (id: mediaTypes.Channel['id']): Promise<AxiosResponse<mediaTypes.OpenChannelStreamResponse>> => {
    return mediaApi(axiosInstance).openChannelStream(id)
  },
  getMovies: (id?: mediaTypes.Movie['id']): Promise<AxiosResponse<mediaTypes.GetMoviesResponse>> => {
    return mediaApi(axiosInstance).getMovies(id)
  },
}
