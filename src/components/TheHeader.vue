<script
  setup
  lang="ts"
>
  import { useAuth } from '@/composables/useAuth.ts'
  import { computed } from 'vue'
  import AppButton from '@/components/app/AppButton.vue'

  const auth = useAuth()

  const links = computed(() => {
    return [
      {
        name: 'television',
        label: 'Television',
      },
      {
        name: 'movie',
        label: 'Movies',
      },
    ]
  })
</script>

<template>
  <header class="sticky top-0 bg-white">
    <nav class="px-4 sm:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex gap-4">
          <RouterLink
            v-for="item in links"
            :key="item.name"
            :to="{ name: item.name }"
            :class="{
              'hover:text-gray-500': item.name !== $route.name,
              'font-bold underline underline-offset-6': item.name === $route.name
            }"
          >
            {{ item.label }}
          </RouterLink>
        </div>

        <AppButton
          class="bg-white"
          @click="auth.logout()"
        >
          Log Out
        </AppButton>
      </div>
    </nav>
  </header>
</template>
