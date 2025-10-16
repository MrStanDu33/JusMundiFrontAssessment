<template>
  <div class="tag" />
</template>

<style scoped lang="scss">
@use 'sass:map';

.tag {
  background-color: map.get(theme.$fluo, green-for-white-bg);
  content: '';
  display: block;
  position: absolute;
  width: 2px;
}
</style>
