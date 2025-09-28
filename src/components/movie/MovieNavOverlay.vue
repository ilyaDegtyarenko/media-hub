<template>
  <div
    class="
      z-1
      pointer-events-none
      absolute
      top-0
      left-0
      opacity-0
      size-full
      py-4
      px-6
      bg-gradient-to-b
      from-[rgba(0,0,0,0.5)]
      to-transparent
      transition-opacity
      group-hover:opacity-100
    "
  >
    <RouterLink
      :to="{ name: 'movie-list' }"
      class="app-link underline-offset-4 pointer-events-auto text-lg"
    >
      &lsaquo; Back to list
    </RouterLink>
  </div>
</template>
