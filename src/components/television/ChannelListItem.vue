<script
  lang="ts"
  setup
>
  import type { Channel } from '@/ts/types/media.ts'

  type Props = {
    channel: Channel
    active: boolean
  }

  const props = defineProps<Props>()
</script>

<template>
  <RouterLink
    class="
      overflow-hidden
      min-h-[60px]
      h-[60px]
      group
      flex
      items-center
      gap-4
      p-2
      rounded-lg
      cursor-pointer
      hover:bg-[var(--bg-default)]
    "
    :class="{ 'bg-[var(--bg-default)]': props.active }"
    :style="`--channel-color: ${props.channel.colour}`"
    :to="{
      name: 'channel',
      params: {
        id: props.channel.id,
      }
    }"
  >
    <div
      class="
        h-full
        w-2
        rounded-lg
        bg-[var(--bg-default)]
        group-hover:bg-[var(--channel-color)]
      "
      :class="{ 'bg-[var(--channel-color)]': props.active }"
    ></div>

    <img
      :src="props.channel.icon_v2_url"
      :alt="props.channel.name"
      class="h-12 w-12 rounded-lg object-cover"
    />

    <div class="text-lg font-medium truncate w-full">
      {{ props.channel.name }}
    </div>
  </RouterLink>
</template>
