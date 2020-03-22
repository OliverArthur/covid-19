<template>
  <header
    :class="modifier"
    class="cov-header box-shadow">
      <h1 class="cov-logo heading-three">
        Covid-19 Dashboard
      </h1>
  </header>
</template>

<script>
export default {
  name: 'CovHeader',
  props: {
    modifier: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
 .cov-header {
  background-color: #fff;
  color: rgba(0,0,0,0.87);
  height: 6.4rem;
  padding: 1.6rem;
  position:fixed;
  top: 0;
  width: 100%;
  z-index: 999;
 }
</style>
