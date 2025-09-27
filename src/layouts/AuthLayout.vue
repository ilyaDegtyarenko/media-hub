<script
  lang="ts"
  setup
>
  import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <main class="flex-1">
      <Suspense>
        <slot />
      </Suspense>
    </main>

    <TheFooter />
  </div>
</template>
