<script
  setup
  lang="ts"
>
  import type { Movie } from '@/ts/types/media.ts'
  import AppCard from '@/components/app/AppCard.vue'
  import AppImage from '@/components/app/AppImage.vue'

  type Props = {
    item: Movie
  }

  const props = defineProps<Props>()
</script>

<template>
  <AppCard
    class="!p-0 overflow-hidden h-full"
    content-class="relative flex-col w-full sm:w-[300px]"
  >
    <div class="size-full">
      <AppImage
        :src="props.item.poster_url"
        :alt="props.item.title"
        class="size-full"
      />
    </div>

    <div class="flex flex-col gap-1 px-4 pb-4 w-full">
      <div class="text-lg font-bold">
        {{ props.item.title }}
      </div>

      <div class="flex items-end justify-between gap-1">
        <div class="font-medium">
          {{ props.item.year }}
        </div>

        <div
          v-for="scoreItem in props.item.scores"
          :key="scoreItem.provider"
          class="flex items-center gap-1 text-xs"
        >
          <div>
            {{ scoreItem.provider }}:
          </div>

          <div class="font-medium">
            {{ scoreItem.value }}
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-8 right-0 px-2 py-1 bg-black text-white font-medium rounded-l-lg">
      {{ props.item.age_limit }}+
    </div>
  </AppCard>
</template>
