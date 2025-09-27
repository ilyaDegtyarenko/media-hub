import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/plugins/router'
import { mediaService } from '@/services/media.service.ts'
import type { Channel } from '@/ts/types/media.ts'

export const useMediaStore = defineStore('media', () => {
  const channels = ref<Channel[]>([])

  const fillChannels = async (): Promise<void> => {
    if (channels.value.length) {
      return
    }

    try {
      const { data } = await mediaService.getChannels()

      channels.value = data.list
    } catch (error) {
      console.error('Error occurred while fetching channels:', error)
    }
  }

  const selectChannel = async (id: Channel['id'] | undefined = undefined): Promise<void> => {
    if (!channels.value.find(v => v.id === id)) {
      id = channels.value[0]?.id
    }

    if (id) {
      await router.push({
        name: 'channel',
        params: { id },
      })
    }
  }

  return {
    channels,

    fillChannels,
    selectChannel,
  }
})
