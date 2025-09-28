import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/plugins/router'
import { mediaService } from '@/services/media.service.ts'
import type { Channel, Movie } from '@/ts/types/media.ts'

export const useMediaStore = defineStore('media', () => {
  const channels = ref<Channel[]>([])
  const movies = ref<Movie[]>([])

  const fillChannels = async (): Promise<void> => {
    if (channels.value.length) {
      return
    }

    try {
      const { data } = await mediaService.getChannels()

      channels.value = data.list || []
    } catch (error) {
      console.error('Error occurred while fetching channels:', error)
    }
  }

  const fillMovies = async (): Promise<void> => {
    if (movies.value.length) {
      return
    }

    try {
      const { data } = await mediaService.getMovies()

      movies.value = data.movies || []
    } catch (error) {
      console.error('Error occurred while fetching movies:', error)
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
    movies,

    fillChannels,
    fillMovies,
    selectChannel,
  }
})
