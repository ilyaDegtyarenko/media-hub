<script
  setup
  lang="ts"
>
  import type { Movie } from '@/ts/types/media.ts'
  import AppImage from '@/components/app/AppImage.vue'
  import AppVideoPlayer from '@/components/app/AppVideoPlayer.vue'

  type Props = {
    item: Movie
    hovered: boolean
  }

  const props = defineProps<Props>()
</script>

<template>
  <div class="relative size-full">
    <AppImage
      key="poster"
      :src="props.item.poster_url"
      :alt="props.item.title"
      class="size-full"
    />

    <KeepAlive>
      <AppVideoPlayer
        v-if="props.item.trailer_url && props.hovered"
        key="trailer"
        :src="props.item.trailer_url"
        :video-attrs="{
        loop: true,
        preload: 'none',
        controls: false,
      }"
        class="absolute top-0 left-0 size-full"
      />
    </KeepAlive>

    <div
      v-if="props.item.trailer_url"
      key="trailer"
      class="
        absolute
        top-0
        left-0
        size-full
        flex
        items-end
        justify-center
        pb-10
        bg-black
        opacity-10
        text-3xl
        text-white
        font-black
        animate-pulse
        transition-opacity
      "
      :class="{ '!opacity-0': !props.hovered }"
    >
      WATCH NOW
    </div>
  </div>
</template>
