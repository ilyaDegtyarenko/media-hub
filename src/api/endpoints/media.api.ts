import type { AxiosInstance } from 'axios'
import type { Channel } from '@/ts/types/media.ts'

export default (fetch: AxiosInstance) => ({
  getChannels() {
    return fetch('/TvService/GetChannels.json', {
      method: 'POST',
      data: {
        'need_epg': false,
        'need_list': true,
        'need_categories': false,
        'need_offsets': false,
        'need_icons': true,
        'need_big_icons': true,
        'channels': [ 553, 3198, 890, 899, 2979, 1980, 1448, 903, 1532, 3154, 2630, 3187, 2707, 78 ],
      },
    })
  },
  openChannelStream(id: Channel['id']) {
    return fetch('/TvService/OpenStream.json', {
      method: 'POST',
      data: {
        'channel_id': id,
      },
    })
  },
})
