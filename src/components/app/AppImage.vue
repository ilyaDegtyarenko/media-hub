<script
  lang="ts"
  setup
>
  type Props = {
    src: string
    alt: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <img
    :src="props.src"
    :alt="props.alt"
    draggable="false"
    class="rounded-lg object-cover"
  />
</template>
