<script
  setup
  lang="ts"
>
  import AppContentLoader from '@/components/app/AppContentLoader.vue'

  defineOptions({
    inheritAttrs: false,
  })
</script>

<template>
  <Suspense>
    <RouterView
      v-slot="{ Component }"
      v-bind="$attrs"
    >
      <Transition name="fade-transition">
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <template #fallback>
      <AppContentLoader />
    </template>
  </Suspense>
</template>

