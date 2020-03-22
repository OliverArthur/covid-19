<template>
  <aside class="cov-map">
    <fusioncharts
      type="world"
      :width="100"
      :height="350"
      dataFormat="json"
      :dataSource="dataSource">
    </fusioncharts>
  </aside>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'CovMap',
  props: {
    data: {
      type: [Object, Array],
      required: false
    }
  },
  setup (props, context) {
    const dataSource = ref({
      chart: {
        caption: '',
        legendposition: 'BOTTOM',
        entityfillhovercolor: '#FFCDD2',
        theme: 'fusion',
        formatnumberscale: '0'
      },
      colorrange: {
        startlabel: 'Low',
        endlabel: 'High',
        code: '#D7DDFF',
        minvalue: '0',
        gradient: '1',
        color: [
          {
            maxvalue: '150',
            displayvalue: 'Average',
            code: '#828FD6'
          },
          {
            maxvalue: '300',
            code: '#36469F'
          }
        ]
      }
    })
    return {
      dataSource
    }
  }
}
</script>
