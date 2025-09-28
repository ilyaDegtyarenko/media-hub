import type { Channel, Movie } from '@/ts/types/media.ts'
import { useRoute } from 'vue-router'
import { type ComputedRef, computed } from 'vue'

export const useEntityIdFromRoute = (): ComputedRef<Channel['id'] | Movie['id'] | null> => {
  const route = useRoute()

  return computed(() => {
    return +(route.params?.id || 0) || null
  })
}
