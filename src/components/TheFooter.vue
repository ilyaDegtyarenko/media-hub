<script
  lang="ts"
  setup
>
  const appTitle = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <footer class="flex justify-center py-8 text-2xl text-gray-400">
    {{ appTitle }}
  </footer>
</template>
