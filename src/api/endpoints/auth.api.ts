import type { AxiosInstance } from 'axios'

const loginExtraData = {
  'device': {
    'type': 'DT_Web_Browser',
    'sub_type': 'DST_WINDOWS',
    'application': { 'type': 'AT_SWEET_TV_Player' },
    'model': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
    'firmware': { 'versionCode': 1, 'versionString': '6.9.99' },
    'supported_drm': { 'widevine_modular': true },
    'screen_info': { 'aspectRatio': 6, 'width': 1920, 'height': 1080 },
  },
}

export default (fetch: AxiosInstance) => ({
  login(refreshToken: string) {
    return fetch('/AuthenticationService/Token.json', {
      method: 'POST',
      data: {
        refreshToken,
        ...loginExtraData,
      },
    })
  },
})
