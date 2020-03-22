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
      <div class="container">
        <div class="scroll">
          <div class="grid">
            <cov-table
              v-for="(item, index) in details.stats.breakdowns"
              :key="index"
              :localtion="item.location.countryOrRegion"
              :total-case="item.totalConfirmedCases"
              :new-case="item.newlyConfirmedCases"
              :total-deaths="item.totalDeaths"
              :new-deaths="item.newDeaths"
              :total-recovered="item.totalRecoveredCases">
            </cov-table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import useCoronaVirus from '@/hooks/use-coronavirus'
import CovHeader from '@/components/CovHeader'
import CovGlobalStats from '@/components/CovGlobalStats'
import CovChart from '@/components/CovChart'
import CovTable from '@/components/CovTable'

export default {
  name: 'App',
  components: {
    CovHeader,
    CovGlobalStats,
    CovChart,
    CovTable
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

.scroll {
  height: 60.5rem;
  overflow: hidden;
}

.scroll .grid {
  height: 100vh;
  overflow-x: auto;
}
</style>
