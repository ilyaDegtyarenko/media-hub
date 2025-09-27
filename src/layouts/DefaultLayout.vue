<script
  lang="ts"
  setup
>
  import TheFooter from '@/components/TheFooter.vue'
  import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="overflow-auto h-screen flex flex-col bg-[var(--bg-default)]">
    <TheHeader />

    <main class="flex-1 p-4 sm:py-4 sm:px-8">
      <Suspense>
        <slot />
      </Suspense>
    </main>

    <TheFooter />
  </div>
</template>
