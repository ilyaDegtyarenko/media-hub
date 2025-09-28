<script
  setup
  lang="ts"
>
  import { useMediaStore } from '@/stores/media.ts'
  import { useEntityIdFromRoute } from '@/composables/useEntityIdFromRoute.ts'
  import AppPage from '@/components/app/AppPage.vue'
  import AppRouteView from '@/components/app/AppRouteView.vue'
  import ChannelList from '@/components/television/ChannelList.vue'

  const mediaStore = useMediaStore()
  const channelId = useEntityIdFromRoute()

  await mediaStore.fillChannels()

  mediaStore.selectChannel(channelId.value)
</script>

<template>
  <AppPage class="md:flex-row max-md:w-full gap-4">
    <ChannelList class="md:basis-2/6 xl:basis-1/4" />

    <AppRouteView
      v-if="channelId"
      :key="channelId"
      :id="channelId"
      class="md:flex-1"
    />
  </AppPage>
</template>
