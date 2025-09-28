<script
  lang="ts"
  setup
>
  import { computed, defineComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import AuthLayout from '@/layouts/AuthLayout.vue'
  import AppRouteView from '@/components/app/AppRouteView.vue'

  const route = useRoute()

  const layoutComponent = computed<ReturnType<typeof defineComponent>>(() => {
    if (route.meta.layout === 'default') {
      return DefaultLayout
    }

    return AuthLayout
  })
</script>

<template>
  <Transition name="fade-transition">
    <Component :is="layoutComponent">
      <AppRouteView />
    </Component>
  </Transition>
</template>
