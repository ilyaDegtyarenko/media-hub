<script
  setup
  lang="ts"
>
  import AppPage from '@/components/app/AppPage.vue'
</script>

<template>
  <AppPage class="items-center justify-center">
    <div class="flex flex-col gap-4">
      <h1 class="text-3xl font-bold">
        404 Not Found
      </h1>

      <RouterLink
        :to="{ name: 'login' }"
        class="app-link"
      >
        < Back
      </RouterLink>
    </div>
  </AppPage>
</template>
