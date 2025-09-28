<script
  setup
  lang="ts"
>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAuth } from '@/composables/useAuth.ts'
  import AppButton from '@/components/app/AppButton.vue'

  type NavItem = {
    name: string
    label: string
    key: string
  }

  const auth = useAuth()
  const route = useRoute()

  const navItems = computed<NavItem[]>(() => {
    return [
      {
        name: 'television',
        label: 'Television',
        key: 'television',
      },
      {
        name: 'movie-list',
        label: 'Movies',
        key: 'movie',
      },
    ]
  })

  const isNavItemActive = (item: NavItem): boolean => {
    return route.path.startsWith('/' + item.key)
  }
</script>

<template>
  <header
    class="
      z-1
      sticky
      top-0
      bg-white
      h-[var(--header-height)]
      min-h-[var(--header-height)]
      flex
      items-center
      justify-between
      px-4
      sm:px-8
      gap-4
      shadow
    "
  >
    <nav class="flex gap-4">
      <RouterLink
        v-for="item in navItems"
        :key="item.key"
        :to="{ name: item.name }"
        :class="{
          'hover:text-gray-500': !isNavItemActive(item),
          'font-bold underline underline-offset-6': isNavItemActive(item),
        }"
      >
        {{ item.label }}
      </RouterLink>
    </nav>

    <AppButton
      class="bg-white"
      @click="auth.logout()"
    >
      Log Out
    </AppButton>
  </header>
</template>
