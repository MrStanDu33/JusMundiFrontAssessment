<template>
  <component :is="props.tag" :class="[props.type, props.size === 'small' ? 'small' : '', 'button']">
    <slot name="icon" v-if="slots.icon" />
    <span class="text"><slot /></span>
  </component>
</template>

<script setup lang="ts">
interface Slots {
  icon?: any
  default: string
}

const slots = defineSlots<Slots>()

if (!slots.default) {
  throw new Error('Default slot is required and must be a string')
}

const props = defineProps({
  size: {
    type: String as () => 'small' | 'regular',
    required: false,
    default: 'regular',
  },
  icon: {
    type: String,
    required: false,
  },
  type: {
    type: String as () => 'primary' | 'secondary',
    required: false,
    default: 'primary',
  },
  tag: {
    type: String,
    required: false,
    default: 'button',
  },
})
</script>

<style scoped lang="scss">
$color: #fff;

.button {
  cursor: pointer;
  align-items: stretch;
  background-color: $color;
  border: none;
  box-shadow: 0 8px 32px 0 rgb(37 79 109 / 24%);
  display: flex;
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 700;
  gap: 16px;
  letter-spacing: 2px;
  padding: 20px 30px;
  text-decoration: none;
}

.button.primary {
  background-color: #009efe;
  color: #fff;
}

.button.secondary {
  background-color: #fff;
  color: #000;
}

.button:not(.small) {
  padding: 20px 30px;
}

.small {
  padding: 16px;
}
</style>
