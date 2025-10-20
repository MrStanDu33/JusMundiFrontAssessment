<template>
  <component
    :is="gridType"
    class="grid"
    :style="{
      gridTemplateColumns: `repeat(auto-fit, minmax(${minChildrenWidth}px, 1fr))`,
      gridAutoRows: `minmax(${minChildrenHeight}px, 1fr)`,
      gap: `${gap}px`,
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  gap: {
    default: 10,
    required: false,
    type: Number,
  },
  minChildrenHeight: {
    default: 200,
    required: false,
    type: Number,
  },
  minChildrenWidth: {
    default: 200,
    required: false,
    type: Number,
  },
  type: {
    default: 'div',
    required: false,
    type: String as () => 'ordered-list' | 'unordered-list' | string,
  },
})

const gridTypes = {
  default: 'div',
  'ordered-list': 'ol',
  'unordered-list': 'ul',
}

const gridType = computed(() => gridTypes[props.type] || gridTypes.default)
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  list-style-type: none;
  padding: 0;
}
</style>
