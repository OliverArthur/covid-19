<template>
  <section class="cov-global-stats container grid">
    <cov-card
      title="total confirmed cases:"
      modifier="border-blue"
      :metric="data.stats.totalConfirmedCases"
      :new-case="`(+${data.stats.newlyConfirmedCases})`" />
    <cov-card
      title="total deaths:"
      modifier="border-red"
      :metric="data.stats.totalDeaths"
      :new-case="`(+${data.stats.newDeaths})`" />
    <cov-card
      title="total recovered cases:"
      modifier="border-green"
      :metric="data.stats.totalRecoveredCases"
      :new-case="`+(${data.stats.newlyRecoveredCases})`" />
    <cov-card
      title="Updated at:"
      modifier="notextransform"
      :metric="lastUpdate" />
  </section>
</template>

<script>
import { computed } from '@vue/composition-api'
import CovCard from '@/components/CovCard'

export default {
  name: 'CovGlobalSats',
  props: {
    data: {
      type: [Object, Array],
      required: false
    }
  },
  components: {
    CovCard
  },
  setup (props, context) {
    const { data } = props
    const lastUpdate = computed(() => {
      const date = new Date(data.updatedDateTime).toLocaleDateString()
      return date
    })

    return { lastUpdate }
  }
}
</script>
