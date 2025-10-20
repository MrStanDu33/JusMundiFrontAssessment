<template>
  <section id="partnership">
    <h2 class="heading">Why this partnership?</h2>
    <p>
      Throughout its 100-year history, ICC has brought global business together to support an international rules-based
      order, including the promotion of global trade and commerce through the work of the ICC International Court of
      Arbitration.
    </p>
    <p>
      ICC has partnered with Jus Mundi to provide full public access to all publishable ICC International Court of
      Arbitration awards and related documents made as of 1 January 2019
    </p>
    <CommonResponsiveGrid
      id="partnership-grid"
      type="unordered-list"
      :gap="32"
      :min-children-width="250"
      :min-children-height="170"
    >
      <PartnershipBenefits
        title="More key arbitration content"
        description="This unique partnership means you will have access to more key arbitration content to level up your arbitration research."
        :icon-src="ContentIcon"
        icon-alt="More content"
      />
      <PartnershipBenefits
        title="More transparency"
        description="You will appreciate the increase in transparency in arbitration!"
        :icon-src="TransparencyIcon"
        icon-alt="More transparency"
      />
      <PartnershipBenefits
        title="More efficiency"
        description="Jus Mundi’s AI-powered technology efficiently delivers thorough legal research and due diligence with full confidence."
        :icon-src="EfficencyIcon"
        icon-alt="More efficiency"
      />
    </CommonResponsiveGrid>
  </section>
</template>

<script setup lang="ts">
import EfficencyIcon from '@/assets/images/efficency_icon.svg'
import ContentIcon from '@/assets/images/morecontent_icon.svg'
import TransparencyIcon from '@/assets/images/transparency_icon.svg'

import PartnershipBenefits from './PartnershipBenefits.vue'
</script>

<style lang="scss" scoped>
@use 'sass:map';

#partnership {
  margin: 86px auto 0;
  padding: 20px;

  .heading {
    @include theme.typography(medium-title);

    color: map.get(theme.$main, fake-black);
    margin: 0 auto;
    max-width: 900px;
    text-align: center;
  }

  p {
    @include theme.typography(p);

    margin: 32px auto 0;
    max-width: 900px;
    text-align: center;
  }

  #partnership-grid {
    margin: 172px auto 0;
    max-width: 1310px;

    @media (width <= 900px) {
      grid-template-columns: 1fr !important;
      margin-top: 70px;
      max-width: 500px;
    }
  }
}
</style>
