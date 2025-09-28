import axiosInstance from '@/api/axiosInstance'
import mediaApi from '@/api/endpoints/media.api.ts'
import type { AxiosResponse } from 'axios'
import type { Channel, GetChannelsResponse, OpenChannelStreamResponse } from '@/ts/types/media.ts'

export const mediaService = {
  getChannels: (): Promise<AxiosResponse<GetChannelsResponse>> => {
    return mediaApi(axiosInstance).getChannels()
  },
  openChannelStream: (id: Channel['id']): Promise<AxiosResponse<OpenChannelStreamResponse>> => {
    return mediaApi(axiosInstance).openChannelStream(id)
  },
}
