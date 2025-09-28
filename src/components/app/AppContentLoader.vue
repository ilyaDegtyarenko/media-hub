<script
  setup
  lang="ts"
>
  import AppSpinner from '@/components/app/AppSpinner.vue'
  import AppCard from '@/components/app/AppCard.vue'
</script>

<template>
  <AppCard class="flex-1 justify-center !items-center md:h-full">
    <AppSpinner />
  </AppCard>
</template>
