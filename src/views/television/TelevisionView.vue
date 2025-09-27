<script
  setup
  lang="ts"
>
  import { useMediaStore } from '@/stores/media.ts'
  import { useRoute } from 'vue-router'
  import AppPage from '@/components/app/AppPage.vue'
  import ChannelList from '@/components/television/ChannelList.vue'

  const mediaStore = useMediaStore()
  const route = useRoute()

  await mediaStore.fillChannels()
  mediaStore.selectChannel(+(route.params?.id || 0))
</script>

<template>
  <AppPage class="md:flex-row max-md:w-full sm:items-start gap-4">
    <ChannelList class="md:basis-2/6 xl:basis-1/4" />

    <RouterView class="md:basis-4/6 xl:basis-3/4" />
  </AppPage>
</template>
