<template>
  <header>
    <CommonTag />
    <CommonTag />
    <CommonTag />
    <div id="image-wrapper">
      <div id="icc" class="absolute"><img id="icc-logo" :src="IccLogo" alt="ICC" /></div>
      <div id="jus-mundi" class="absolute"><img id="jus-mundi-logo" :src="JusMundiLogo" alt="Jus Mundi" /></div>
      <img id="background" class="absolute" :src="background" alt="background files" />
    </div>

    <div id="text-wrapper">
      <h1 class="heading">A Unique Partnership for the Publication of ICC Arbitration Awards</h1>
      <p class="subheading">
        The International Chamber of Commerce (ICC) & Jus Mundi have joined forces to make ICC Arbitration Awards and
        related materials freely available to the global legal community.
      </p>
      <CommonButton tag="a" type="primary" class="button goto-icc" href="#">
        <template #icon><div class="caret-right-icon">N</div></template>
        ACCESS ICC AWARDS
      </CommonButton>
    </div>
    <CommonButton tag="a" size="small" type="secondary" class="button floating" href="#">
      <template #icon><img class="arrow-up-icon" :src="IconArrowUp" alt="arrow up" /></template>
      TRY JUS MUNDI
    </CommonButton>
  </header>
</template>

<script setup lang="ts">
import background from '@/assets/images/case_bg.gif'
import IconArrowUp from '@/assets/images/ico-arrow_up.svg'
import IccLogo from '@/assets/images/logo_icc.svg'
import JusMundiLogo from '@/assets/images/logo_jm.svg'
</script>

<style scoped lang="scss">
@use 'sass:map';
@use './lib' as lib;
@use './variables' as vars;
@use './animations' as animations;

.absolute {
  position: absolute;
}

header {
  background-image: linear-gradient(180deg, #fff0, #f5f5f5ff);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 120px;
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  justify-content: center;
  position: relative;
}

@each $n, $props in vars.$tags {
  // eslint-disable-next-line vue-scoped-css/no-unused-selector -- false-positive
  .tag:nth-of-type(#{$n}) {
    @each $prop, $value in $props {
      #{$prop}: $value;
    }
  }
}

#image-wrapper {
  align-self: center;
  flex: 1 0;
  height: lib.scale(map.get(vars.$base-canvas, height));
  max-width: 800px;
  min-width: 450px;
  position: relative;
}

#icc-logo,
#jus-mundi-logo,
#background {
  object-fit: contain;
}

#background {
  @include lib.responsive-image(map.get(vars.$elements, background));

  opacity: 0;
}

#jus-mundi {
  @include lib.responsive-image(map.get(vars.$elements, jus-mundi));

  opacity: 0;
}

#jus-mundi-logo {
  width: lib.scale(map.get(vars.$elements, jus-mundi, logo));
}

#icc {
  @include lib.responsive-image(map.get(vars.$elements, icc));

  transform-origin: 50%;
}

#icc-logo {
  opacity: 0;
  width: lib.scale(map.get(vars.$elements, icc, logo));
}

#text-wrapper {
  $min-margin: 100;
  $max-margin: 205;
  $min-parent-width: 900;
  $max-parent-width: 1440;

  display: flex;
  flex: 1 0;
  flex-flow: column;
  gap: 16px;

  /* clamp margin-top with linear interpolation between min and max */

  /* prettier-ignore */
  margin-top: clamp(
    #{$min-margin}px,
    lib.responsive-margin($min-margin, $max-margin, $min-parent-width, $max-parent-width),
    #{$max-margin}px
  );
  max-width: 1000px;
  min-width: 450px;
  opacity: 0;
}

.heading {
  color: map.get(theme.$main, fake-black);
  font-family: Larken, serif;
  font-size: map.get(vars.$font-size, heading);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 64px;
  margin: 0;
  width: 82%;
}

.subheading {
  color: map.get(theme.$main, fake-black);
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: map.get(vars.$font-size, text);
  font-weight: 400;
  line-height: 32px;
  margin-top: 32px;
  width: 82%;
}

.button.floating {
  position: absolute;
  right: 65px;
  top: 47px;
}

.arrow-up-icon {
  height: 16px;
  vertical-align: middle;
  width: 16px;
}

.button.goto-icc {
  align-self: flex-start;
  opacity: 0;
}

.caret-right-icon {
  font-family: Icons, sans-serif;
  rotate: -90deg;
}
</style>
