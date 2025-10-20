<template>
  <li class="partnership-benefit">
    <img :src="props.iconSrc" :alt="props.iconAlt" />
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: {
    type: string
    required: true
  }
  description: {
    type: string
    required: true
  }
  iconSrc: {
    type: string
    required: true
  }
  iconAlt: {
    type: string
    required: true
  }
}>()
</script>

<style lang="scss" scoped>
@use 'sass:map';

.partnership-benefit {
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 20px;

  h3 {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: map.get(theme.$font-sizes, regular);
    font-weight: 700;
    line-height: 32px;
    margin: 17px auto 0;
    text-align: center;
    vertical-align: middle;
  }

  p {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: map.get(theme.$font-sizes, small);
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    vertical-align: middle;
  }
}
</style>
