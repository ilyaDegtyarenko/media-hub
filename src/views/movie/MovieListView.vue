<script
  setup
  lang="ts"
>
  import { useMediaStore } from '@/stores/media.ts'
  import AppPage from '@/components/app/AppPage.vue'
  import MovieListItem from '@/components/movie/list/MovieListItem.vue'

  const mediaStore = useMediaStore()

  await mediaStore.fillMovies()
</script>

<template>
  <AppPage>
    <div class="flex max-md:flex-col md:flex-wrap gap-4 w-full justify-center pb-8">
      <RouterLink
        v-for="item in mediaStore.movies"
        :key="item.id"
        :to="{
          name: 'movie',
          params: {
            id: item.id,
          }
        }"
        class="
          transition-transform
          hover:not-active:scale-[1.01]
          hover:not-active:translate-y-[5px]
        "
      >
        <MovieListItem :item="item" />
      </RouterLink>
    </div>
  </AppPage>
</template>
