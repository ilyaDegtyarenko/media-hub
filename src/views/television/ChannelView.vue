<script
  setup
  lang="ts"
>
  import { computed, shallowRef } from 'vue'
  import { mediaService } from '@/services/media.service.ts'
  import { useMediaStore } from '@/stores/media.ts'
  import type { Channel, OpenChannelStreamResponse } from '@/ts/types/media.ts'
  import AppCard from '@/components/app/AppCard.vue'
  import AppVideoPlayer from '@/components/app/AppVideoPlayer.vue'
  import AppImage from '@/components/app/AppImage.vue'

  type Props = {
    id: Channel['id']
  }

  const props = defineProps<Props>()

  const mediaStore = useMediaStore()

  const videoSrc = shallowRef<OpenChannelStreamResponse['url'] | null>(null)

  const channel = computed<Channel | undefined>(() => {
    return mediaStore.channels.find(v => v.id === props.id)
  })

  const fillVideoSrc = async (): Promise<void> => {
    if (!props.id) {
      console.error('Channel ID is not provided')

      return
    }

    try {
      const { data } = await mediaService.openChannelStream(props.id)

      videoSrc.value = data.url
    } catch (error) {
      console.error('Failed to open channel stream:', error)
    }
  }

  await fillVideoSrc()
</script>

<template>
  <AppCard
    class="md:h-full !p-0 overflow-hidden"
    content-class="flex-col md:h-full bg-black"
  >
    <div
      key="player"
      class="size-full min-h-0"
    >
      <AppVideoPlayer
        v-if="videoSrc"
        key="player"
        :src="videoSrc"
      />

      <div
        v-else
        class="flex items-center justify-center size-full text-center text-xl text-white"
      >
        <div>
          There is no video available for this channel
        </div>
      </div>
    </div>

    <div
      v-if="channel"
      key="details"
      class="flex items-center gap-4 p-4 text-white"
    >
      <AppImage
        :src="channel.icon_v2_url"
        :alt="channel.name"
        class="size-10"
      />

      <span class="text-lg font-medium">
        {{ channel.name }}
      </span>
    </div>
  </AppCard>
</template>
