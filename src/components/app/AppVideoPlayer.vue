<script
  setup
  lang="ts"
>
  import { onMounted, onScopeDispose, shallowRef, useTemplateRef } from 'vue'
  import HLS from 'hls.js'
  import type { OpenChannelStreamResponse } from '@/ts/types/media.ts'

  type Props = {
    src: OpenChannelStreamResponse['url']
  }

  const props = defineProps<Props>()

  const videoRef = useTemplateRef<HTMLVideoElement>('videoRef')
  const hls = shallowRef<HLS | null>(null)

  const initPlayer = (): void => {
    if (!props.src) {
      console.error('Video src is not provided')

      return
    }

    if (!videoRef.value) {
      console.error('There is no video element')

      return
    }

    if (hls.value) {
      hls.value.destroy()
      hls.value = null
    }

    if (HLS.isSupported()) {
      hls.value = new HLS()

      hls.value.loadSource(props.src)
      hls.value.attachMedia(videoRef.value)
      hls.value.on(HLS.Events.MANIFEST_PARSED, () => {
        videoRef.value?.play().catch(console.error)
      })
    } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.value.src = props.src

      videoRef.value.addEventListener('loadedmetadata', () => {
        videoRef.value?.play().catch(console.error)
      })
    } else {
      console.error('HLS is not supported')
    }
  }

  onMounted(() => {
    initPlayer()
  })

  onScopeDispose(() => {
    hls.value?.destroy()
  })
</script>

<template>
  <div class="block size-full bg-black">
    <video
      ref="videoRef"
      playsinline
      controlslist="nodownload"
      crossorigin="anonymous"
      controls
      autoplay
      muted
      preload="none"
      allow="autoplay; fullscreen"
      class="size-full"
    />
  </div>
</template>
