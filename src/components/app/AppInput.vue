<script
  setup
  lang="ts"
>
  import { v4 as uuid } from 'uuid'

  type InputValue = string | number

  type Props = {
    modelValue: InputValue
    type?: string
    name?: string
    label?: string
    placeholder?: string
    error?: string | null
    disabled?: boolean
    inputClass?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
  })

  const modelValue = defineModel<InputValue>()
  const inputId: string = uuid()
</script>

<template>
  <div class="flex flex-col gap-1">
    <label
      v-if="props.label"
      key="label"
      class="text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>

    <input
      key="input"
      :id="inputId"
      v-model="modelValue"
      :type="props.type"
      :name="props.name"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :class="props.inputClass"
      class="
        appearance-none
        overflow-hidden
        px-3
        py-2
        !text-sm
        outline-none
        bg-[var(--bg-default)]
        disabled:cursor-not-allowed
        disabled:bg-gray-100
        disabled:text-gray-600
        disabled:placeholder-gray-400
        placeholder-gray-500
        focus:ring
        focus:ring-gray-400
        rounded-lg
      "
    />

    <Transition name="input-error-transition">
      <div
        v-if="props.error"
        key="error"
        class="px-1 text-sm text-red-600"
      >
        {{ props.error }}
      </div>
    </Transition>
  </div>
</template>

<style
  lang="sass"
  scoped
>
  .input-error-transition
    &-enter-from,
    &-leave-to
      max-height: 0 !important
      opacity: 0 !important
      overflow: hidden !important

    &-enter-active,
    &-leave-active
      transition: max-height var(--transition-default-duration-with-ease), opacity var(--transition-default-duration-with-ease) !important
      overflow: hidden !important

    &-enter-to,
    &-leave-from
      max-height: 50px !important
      opacity: 1 !important
</style>
