<template>
  <article class="cov-table box-shadow">
    <div class="cov-table__header">
      <span><strong>{{ localtion }}</strong></span>
    </div>
    <div class="cov-table__body">
      <span><strong>Total Cases:</strong> {{ totalCase }} </span>
      <span><strong>New Cases:</strong> {{ newCase }} </span>
      <span><strong>Total Deaths:</strong> {{ totalDeaths }} </span>
      <span><strong>New Deaths:</strong> {{ newDeaths }} </span>
      <span><strong>Total Recovered:</strong> {{ totalRecovered }} </span>
    </div>
  </article>
</template>
<script>
export default {
  name: 'CovTable',
  props: {
    localtion: {
      type: String,
      required: false
    },
    totalCase: {
      type: Number,
      required: false
    },
    newCase: {
      type: Number,
      required: false
    },
    totalDeaths: {
      type: Number,
      required: false
    },
    newDeaths: {
      type: Number,
      required: false
    },
    totalRecovered: {
      type: Number,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.cov-table {
  background-color: #fff;
}

.cov-table__header {
  padding: 1.6rem;
  border-bottom: 0.1rem solid #CCC;

  span {
    font-size: 1.8rem;
    text-transform: uppercase;
  }
}

.cov-table__body {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.4rem;
    display: block;
    margin-bottom: 0.5rem;
  }
}
</style>
