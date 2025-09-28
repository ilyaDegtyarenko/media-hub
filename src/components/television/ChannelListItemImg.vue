<script
  lang="ts"
  setup
>
  import type { Channel } from '@/ts/types/media.ts'

  type Props = {
    channel: Channel
  }

  const props = defineProps<Props>()
</script>

<template>
  <img
    :src="props.channel.icon_v2_url"
    :alt="props.channel.name"
    draggable="false"
    class="h-12 w-12 rounded-lg object-cover"
  />
</template>
