import { init } from '@rematch/core'
import workers from './workers'

const store = init({
  models: {
    workers
  },
})

export default store
