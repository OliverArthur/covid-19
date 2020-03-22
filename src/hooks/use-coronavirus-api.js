import { reactive, toRefs } from '@vue/composition-api'
import config from '@/config'

export default function useCoronavirusApi () {
  const state = reactive({
    response: [],
    loading: false,
    error: null
  })

  const getAll = async () => {
    state.loading = true
    try {
      const payload = await fetch(`${config.baseUrl}/stats/global`, {
        method: 'GET',
        headers: {
          'Subscription-Key': config.secretKey
        }
      })
      state.response = await payload.json()
      return payload
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    ...toRefs(state),
    getAll
  }
}
