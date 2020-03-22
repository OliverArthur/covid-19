import { reactive, toRefs } from '@vue/composition-api'

import useCoronavirusApi from '@/hooks/use-coronavirus-api'

export default function useCoronavirus () {
  const data = reactive({
    details: [],
    locale: [],
    error: null,
    loading: false
  })

  const info = async () => {
    const { response, loading, error, getAll } = useCoronavirusApi()
    getAll()
    data.details = response
    data.error = error
    data.loading = loading
  }

  const infoByLocation = async (arg) => {
    const { location, loading, error, getByLocation } = useCoronavirusApi()
    getByLocation(arg)
    data.locale = location
    data.error = error
    data.loading = loading
  }

  return {
    ...toRefs(data),
    infoByLocation,
    info
  }
}
