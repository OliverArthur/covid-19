<template>
  <article
    :class="modifier"
    class="cov-card box-shadow">
    <div class="cov-card__header">
      <div class="cov-card__metrics">
        <div class="cov-card__metric">
          <div class="cov-card__metric-title">
            {{ title }}
          </div>
          <div class="cov-card__metric-value">
            {{ metric }}
          </div>
          <div class="cov-card__metric-value increase">
            {{ newCase }}
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'CovCard',
  props: {
    modifier: {
      type: String,
      required: false
    },
    info: {
      type: [Object, Array],
      required: false
    },
    title: {
      type: String,
      required: false
    },
    metric: {
      type: [Number, String],
      required: false
    },
    newCase: {
      type: [Number, String],
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
 .cov-card {
  background-color: #fff;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  margin-top: 0;
  margin: 0.5rem 0 1rem 0;
  position: relative;
  transition: box-shadow .25s;
 }

 .cov-card__metrics {
   display: flex;
 }

 .cov-card__metric {
   padding: 2.4rem;
 }

 .cov-card__metric-title {
   font-size: 1.6rem;
   font-weight: bold;
   text-transform: capitalize;
 }

 .cov-card__metric-value {
   font-size: 2.6rem;
   font-weight: 300;
   &.increase {
     font-size: 1.6rem;
     font-weight:bold;
   }
 }

 .border-blue {
   border-bottom: 0.8rem solid #03B0FF;
 }

 .border-red {
   border-bottom: 0.8rem solid #FF4081;
 }

 .border-green {
   border-bottom: 0.8rem solid #71BE75;
 }

 .notextransform .cov-card__metric-title{
   text-transform: none;
 }
</style>
