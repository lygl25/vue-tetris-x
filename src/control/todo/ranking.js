import event from '../../unit/event'
import {rank} from '../../unit/4399api.js'
const down = store => {
  store.commit('key_ranking', true)
  if (store.state.lock) {
    return
  }
  event.down({
    key: 'k',
    once: true,
    callback: () => {

    }
  })

}

const up = store => {
   store.commit('key_ranking', false)
  event.up({
    key: 'k',
    once: true,
    callback: () => {
      if (store.state.lock) {
        return
      }
        rank(store.state.max)

  }})
}

export default {
  down,
  up
}
