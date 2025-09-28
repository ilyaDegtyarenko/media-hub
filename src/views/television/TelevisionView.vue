<script
  setup
  lang="ts"
>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useMediaStore } from '@/stores/media.ts'
  import type { Channel } from '@/ts/types/media.ts'
  import AppPage from '@/components/app/AppPage.vue'
  import AppRouteView from '@/components/app/AppRouteView.vue'
  import ChannelList from '@/components/television/ChannelList.vue'

  const mediaStore = useMediaStore()
  const route = useRoute()

  const channelId = computed<Channel['id']>(() => {
    return +(route.params?.id || 0)
  })

  await mediaStore.fillChannels()

  mediaStore.selectChannel(channelId.value)
</script>

<template>
  <AppPage class="md:flex-row max-md:w-full gap-4">
    <ChannelList class="md:basis-2/6 xl:basis-1/4" />

    <AppRouteView
      :key="channelId"
      :id="channelId"
      class="md:flex-1"
    />
  </AppPage>
</template>
