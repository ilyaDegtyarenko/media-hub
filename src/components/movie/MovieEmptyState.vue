<template>
  <div class="flex flex-col items-center justify-center size-full text-gray-500">
    <div class="flex flex-col gap-2">
      <div class="text-2xl">
        Movie not found
      </div>

      <RouterLink
        :to="{ name: 'movie-list' }"
        class="app-link"
      >
        &lsaquo; Back to list
      </RouterLink>
    </div>
  </div>
</template>
