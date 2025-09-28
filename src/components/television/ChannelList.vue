<script
  lang="ts"
  setup
>
  import { ref, computed } from 'vue'
  import { useMediaStore } from '@/stores/media.ts'
  import { refDebounced } from '@vueuse/core'
  import type { Channel } from '@/ts/types/media.ts'
  import AppCard from '@/components/app/AppCard.vue'
  import AppInput from '@/components/app/AppInput.vue'
  import ChannelListItem from '@/components/television/ChannelListItem.vue'

  const mediaStore = useMediaStore()

  const searchValue = ref<string>('')
  const debouncedSearchValue = refDebounced(searchValue, 500)

  const filteredChannels = computed<Channel[]>(() => {
    if (!debouncedSearchValue.value) {
      return mediaStore.channels
    }

    return mediaStore.channels.filter((channel) => {
      return channel.name.toLowerCase().includes(debouncedSearchValue.value.toLowerCase())
    })
  })
</script>

<template>
  <AppCard
    class="py-2 px-2 md:h-full max-md:w-full max-md:h-1/2 max-md:overflow-hidden"
    content-class="flex-col gap-4 md:h-full max-md:h-full"
  >
    <AppInput
      key="search"
      v-model="searchValue"
      placeholder="Search..."
      class="w-full"
    />

    <div
      v-if="!mediaStore.channels.length"
      key="no-channels"
      class="self-center pt-4 text-gray-500"
    >
      Loading...
    </div>

    <div
      v-else-if="!filteredChannels.length"
      key="no-filtered-channels"
      class="self-center pt-4 text-gray-500"
    >
      No channels found
    </div>

    <div
      key="channels"
      class="overflow-auto flex flex-col gap-3 pb-2 w-full max-md:h-full"
    >
      <ChannelListItem
        v-for="channel in filteredChannels"
        :key="channel.id"
        :channel="channel"
        :active="channel.id === +$route.params?.id"
      />
    </div>
  </AppCard>
</template>
