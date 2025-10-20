<template>
  <component :is="props.tag" class="button" :class="[props.type, props.size === 'small' ? 'small' : '']">
    <slot v-if="slots.icon" name="icon" />
    <span class="text"><slot /></span>
  </component>
</template>

<script setup lang="ts">
interface Slots {
  icon?: any
  default: string
}

const props = defineProps({
  icon: {
    required: false,
    type: String,
  },
  size: {
    default: 'regular',
    required: false,
    type: String as () => 'small' | 'regular',
  },
  tag: {
    default: 'button',
    required: false,
    type: String,
  },
  type: {
    default: 'primary',
    required: false,
    type: String as () => 'primary' | 'secondary',
  },
})

const slots = defineSlots<Slots>()

if (!slots.default) {
  throw new Error('Default slot is required and must be a string')
}
</script>

<style scoped lang="scss">
@use 'sass:map';

.button {
  @include theme.typography(cta);

  align-items: stretch;
  border: none;
  box-shadow: 0 8px 32px 0 rgb(37 79 109 / 24%);
  cursor: pointer;
  display: flex;
  font-size: map.get(theme.$font-sizes, small);
  gap: 16px;
  padding: 20px 30px;
}

.button.primary {
  background-color: map.get(theme.$main, blue-cta);
  color: map.get(theme.$main, white);
}

.button.secondary {
  background-color: map.get(theme.$main, white);
  color: map.get(theme.$main, dark-grey);
}

.button:not(.small) {
  padding: 20px 30px;
}

.small {
  padding: 16px;
}
</style>
