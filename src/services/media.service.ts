import axiosInstance from '@/api/axiosInstance'
import mediaApi from '@/api/endpoints/media.api.ts'
import type { AxiosResponse } from 'axios'
import type { GetChannelsResponse } from '@/ts/types/media.ts'

export const mediaService = {
  getChannels: (): Promise<AxiosResponse<GetChannelsResponse>> => {
    return mediaApi(axiosInstance).getChannels()
  },
}
