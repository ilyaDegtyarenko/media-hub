<script
  setup
  lang="ts"
>
  import { computed } from 'vue'
  import { useMediaStore } from '@/stores/media.ts'
  import { useEntityIdFromRoute } from '@/composables/useEntityIdFromRoute.ts'
  import type { Movie } from '@/ts/types/media.ts'
  import AppPage from '@/components/app/AppPage.vue'
  import AppCard from '@/components/app/AppCard.vue'
  import MovieEmptyState from '@/components/movie/MovieEmptyState.vue'
  import AppVideoPlayer from '@/components/app/AppVideoPlayer.vue'
  import AppImage from '@/components/app/AppImage.vue'

  const mediaStore = useMediaStore()
  const movieId = useEntityIdFromRoute()

  await mediaStore.fillMovies()

  const movie = computed<Movie | null>(() => {
    return mediaStore.movies.find(v => v.id === movieId.value) || null
  })
</script>

<template>
  <AppPage>
    <AppCard
      class="h-full !p-0 overflow-hidden"
      content-class="flex-col h-full bg-black text-white"
    >
      <div
        v-if="movie"
        key="movie"
        class="flex flex-col h-full"
      >
        <div class="size-full min-h-0">
          <AppVideoPlayer :src="movie.trailer_url" />
        </div>

        <div class="flex flex-col gap-2 p-4">
          <div class="flex items-center gap-4 pb-2">
            <AppImage
              :src="movie.poster_url"
              :alt="movie.title"
              class="size-10"
            />

            <div class="flex flex-col gap-1">
              <div class="text-lg font-medium">
                {{ movie.title }} ({{ movie.year }})
              </div>

              <div class="text-xs">
                IMDB: {{ movie.rating_imdb }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MovieEmptyState
        v-else
        key="no-movie"
      />
    </AppCard>
  </AppPage>
</template>
