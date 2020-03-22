<template>
  <section id="chart" class="container">
    <div class="cov-chart box-shadow">
      <apexchart
        type="line"
        height="350"
        :series="series"
        :options="chartOptions">
      </apexchart>
    </div>
  </section>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'CovChart',
  props: {
    object: {
      type: [Object, Array],
      required: false
    }
  },
  components: {
    apexchart: VueApexCharts
  },
  setup (props, context) {
    const { object } = props
    const dates = computed(() => {
      const newArray = []
      object.forEach(element => {
        newArray.push(new Date(element.date).toLocaleDateString())
      })
      return newArray
    })
    const dataTotalCase = computed(() => {
      const newArray = []
      object.forEach(element => {
        newArray.push(element.confirmed)
      })
      return newArray
    })
    const dataTotalDeath = computed(() => {
      const newArray = []
      object.forEach(element => {
        newArray.push(element.deaths)
      })
      return newArray
    })
    const dataTotalRecovered = computed(() => {
      const newArray = []
      object.forEach(element => {
        newArray.push(element.recovered)
      })
      return newArray
    })
    const series = ref([{
      name: 'Total Cases',
      data: dataTotalCase.value
    }, {
      name: 'Total Recovered',
      data: dataTotalRecovered.value
    }, {
      name: 'Total Deaths',
      data: dataTotalDeath.value
    }])
    const chartOptions = ref({
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: dates.value
      }
    })

    return {
      chartOptions,
      series,
      dataTotalCase,
      dates
    }
  }
}
</script>

<style lang="scss" scoped>
.cov-chart {
  background-color: #fff;
}
</style>
