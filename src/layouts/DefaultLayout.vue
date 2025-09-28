<script
  lang="ts"
  setup
>
  import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="overflow-auto h-screen flex flex-col bg-[var(--bg-default)]">
    <TheHeader />

    <main class="flex-1 p-4 h-[calc(100%-var(--header-height))]">
      <Suspense>
        <slot />
      </Suspense>
    </main>
  </div>
</template>
