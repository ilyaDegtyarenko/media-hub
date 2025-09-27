<script
  lang="ts"
  setup
>
  import { computed, defineComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import AuthLayout from '@/layouts/AuthLayout.vue'

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
      <RouterView v-slot="{ Component }">
        <Transition name="fade-transition">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </Component>
  </Transition>
</template>
