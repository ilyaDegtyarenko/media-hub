<script
  lang="ts"
  setup
>
  import AppDivider from '@/components/app/AppDivider.vue'

  type Props = {
    tag?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    tag: 'div',
  })
</script>

<template>
  <Component
    :is="props.tag"
    class="flex flex-col gap-3 p-4 rounded-lg bg-white"
  >
    <div
      v-if="$slots.title"
      key="title"
      class="text-sm font-bold"
    >
      <slot name="title" />
    </div>

    <AppDivider
      v-if="$slots.title"
      key="divider"
    />

    <div
      key="content"
      class="flex items-start gap-2"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </Component>
</template>
