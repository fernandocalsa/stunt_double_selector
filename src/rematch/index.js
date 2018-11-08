import { init } from '@rematch/core'
import workers from './workers'
import notification from './notification'

const store = init({
  models: {
    workers,
    notification
  },
})

export default store
