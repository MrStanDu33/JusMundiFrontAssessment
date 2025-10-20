<template>
  <div>
    <blockquote class="citation">
      <slot name="quote" />
    </blockquote>
    <cite class="author">
      <slot name="author" />
    </cite>
  </div>
</template>

<script setup lang="ts">
interface Slots {
  quote: any
  author: any
}

defineSlots<Slots>()
</script>

<style lang="scss" scoped>
@use 'sass:map';

.citation {
  color: map.get(theme.$main, fake-black);
  font-family: Larken, serif;
  font-size: map.get(theme.$font, regular);
  font-style: italic;
  font-weight: 300;
  line-height: 32px;
  padding: 0 80px;
  position: relative;
  text-align: justify;
}

.citation::before,
.citation::after {
  content: '';
  height: 19px;
  object-fit: contain;
  position: absolute;
  width: 28px;
}

.citation::before {
  background-image: url('@/assets/images/quote_2.svg');
  left: 20px;
  top: 0;
}

.citation::after {
  background-image: url('@/assets/images/quote_1.svg');
  bottom: 0;
  right: 20px;
}

.author {
  color: map.get(theme.$main, fake-black);
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: map.get(theme.$font, regular);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 24px;
  padding: 0 20px;
  text-align: center;
}
</style>
