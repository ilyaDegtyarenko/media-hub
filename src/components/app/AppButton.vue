<script
  setup
  lang="ts"
>
  type Props = {
    loading?: boolean
    disabled?: boolean
  }

  const props = defineProps<Props>()
</script>

<template>
  <button
    :disabled="props.disabled || props.loading"
    class="
      appearance-none
      relative
      px-3
      py-2
      outline-none
      !text-sm
      !font-bold
      uppercase
      bg-[var(--bg-default)]
      hover:not-disabled:not-active:bg-[#d8d8d8]
      disabled:cursor-not-allowed
      disabled:bg-gray-100
      disabled:text-gray-600
      focus:ring
      focus:ring-gray-400
      rounded-lg
      cursor-pointer
    "
  >
    <slot />

    <template v-if="props.loading">
      ...
    </template>
  </button>
</template>
