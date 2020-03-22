<template>
  <div id="app">
    <cov-header />
    <main>
      <div class="container mtxxl">
        <h2 class="heading-two">Dashboard</h2>
      </div>
      <cov-global-stats
        :data="details">
      </cov-global-stats>
      <cov-chart
        :object="details.stats.history">
      </cov-chart>
    </main>
  </div>
</template>

<script>
import useCoronaVirus from '@/hooks/use-coronavirus'
import CovHeader from '@/components/CovHeader'
import CovGlobalStats from '@/components/CovGlobalStats'
import CovChart from '@/components/CovChart'

export default {
  name: 'App',
  components: {
    CovHeader,
    CovGlobalStats,
    CovChart
  },
  setup () {
    const { details, error, loading, info } = useCoronaVirus()
    return {
      ...info(),
      details,
      error,
      loading
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin-top: 8.4rem;
}
</style>
