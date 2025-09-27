<script
  setup
  lang="ts"
>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { AxiosError } from 'axios'
  import { authService } from '@/services/auth.service.ts'
  import { useAuth } from '@/composables/useAuth.ts'
  import AppPage from '@/components/app/AppPage.vue'
  import AppCard from '@/components/app/AppCard.vue'
  import AppInput from '@/components/app/AppInput.vue'
  import AppButton from '@/components/app/AppButton.vue'

  const router = useRouter()
  const auth = useAuth()

  const appTitle = import.meta.env.VITE_APP_TITLE
  const refreshToken = ref<string>('')
  const inputError = ref<string | null>(null)
  const pending = ref<boolean>(false)

  const handleLogin = async (): Promise<void> => {
    if (pending.value || inputError.value) {
      return
    }

    if (!refreshToken.value) {
      inputError.value = 'Refresh token is required'

      return
    }

    pending.value = true

    try {
      const { data } = await authService.login(refreshToken.value)

      auth.setAuthData(data)

      if (router.currentRoute.value.query.redirect) {
        await router.push(router.currentRoute.value.query.redirect as string)
      } else {
        await router.push({ name: 'television' })
      }
    } catch (error) {
      let errorMessage = ''

      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message
      }

      inputError.value = errorMessage || 'Error occurred while logging in'
    }

    pending.value = false
  }
</script>

<template>
  <AppPage class="items-center justify-center">
    <AppCard
      tag="form"
      @submit.prevent="handleLogin"
    >
      <template #title>
        Log In to {{ appTitle }}
      </template>

      <AppInput
        v-model.trim="refreshToken"
        placeholder="Enter refresh token"
        :error="inputError"
        @input="inputError = null"
      />

      <AppButton
        type="submit"
        :loading="pending"
        :disabled="Boolean(inputError)"
      >
        Log In
      </AppButton>
    </AppCard>
  </AppPage>
</template>
