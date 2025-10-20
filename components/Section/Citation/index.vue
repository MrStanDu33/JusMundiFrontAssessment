<template>
  <section id="citation-wrapper">
    <CommonCitation>
      <template #quote>
        Publicising and disseminating information about arbitration has been one of ICC’s commitments since its creation
        and an instrumental factor in facilitating the development of trade worldwide.
      </template>
      <template #author>
        Note to the Parties and the Arbitral Tribunals <br />
        on the Conduct of Arbitration under the ICC Rules of Arbitration
      </template>
    </CommonCitation>
    <NuxtLink class="read-document" to="#" external target="_blank">read the whole document</NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:map';

#citation-wrapper {
  margin: 102px auto 0;
  max-width: 800px;
}

.read-document {
  @include theme.typography(cta);

  color: map.get(theme.$main, fake-black);
  display: block;
  font-size: map.get(theme.$font-sizes, extra-small);
  font-weight: 400;
  line-height: 16px;
  margin: 16px auto;
  padding: 0 20px;
  text-align: center;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 0%;
  text-underline-offset: 3px;
  width: max-content;
}
</style>
