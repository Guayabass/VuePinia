import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  getters: {// grab from the state/data
    OddOrEven: (state) => {   //se usa state para que el valor se pueda cambiar y el getter pueda recibir la informacion
        if (state.count % 2 === 0) return 'even'
        return 'odd'
    }
  },
  actions: {//methods
    increaseCount() {
      this.count++
    },
    decreaseCount(){
      this.count--
    }
  }
})
