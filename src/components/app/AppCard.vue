<script
  lang="ts"
  setup
>
  type Props = {
    tag?: string
    contentClass?: string
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

    <div
      key="content"
      class="flex items-start gap-2"
      :class="props.contentClass"
    >
      <slot />
    </div>
  </Component>
</template>
