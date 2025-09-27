import type { AxiosInstance } from 'axios'

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
        'channels': [ 1226, 5, 15, 1225, 484, 553, 397, 186, 1595, 890, 899, 1532, 2630, 1326, 3187, 2707, 1870, 47, 17, 78 ],
      },
    })
  },
})
