import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {// grab from the state/data
    doubleCount: (state) => state.counter * 2
  },
  actions: {//methods
    increment() {
      this.counter++
    }
  }
})
