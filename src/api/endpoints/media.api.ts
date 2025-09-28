import type { AxiosInstance } from 'axios'
import type { Channel, Movie } from '@/ts/types/media.ts'

const defaultChannels = [
  3198, 890, 899, 2979, 1980, 1448,
  903, 1532, 3154, 2630, 3187, 2707, 78,
]
const defaultMovies = [
  9728, 3592, 10541, 17128, 33839, 12589, 16362, 3582, 33697,
  15761, 15627, 20004, 31563, 27461, 14558, 9028, 9158,
]

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
        'need_big_icons': false,
        'channels': defaultChannels,
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
  getMovies(id?: Movie['id']) {
    return fetch('/MovieService/GetMovieInfo.json', {
      method: 'POST',
      data: {
        'movies': id ? [ id ] : defaultMovies,
        'need_extended_info': false,
      },
    })
  },
})
