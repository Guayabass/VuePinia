

<template>
  <div class="home">
    <Counter />
    <div class="buttons">
    <button @click="counterStore.decreaseCount">-</button>
    <button @click="counterStore.increaseCount">+</button>
    </div>
    <hr>
    <div>
      This counter is: {{ counterStore.OddOrEven }}
    </div>
    <hr>
    <div>
      <h3>Edit counter:</h3>
      <input v-model="counterStore.count" type="number"> <!--v-model toma el valor y lo edita en todo lado-->
    </div>
  </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import { useCounterStore } from '../stores/counter.js';

const counterStore = useCounterStore()

/**const increaseCount = () => { /** arrow function para guardar la funcion en una constante
  count.value++
}

const decreaseCount = () => {
  count.value--
}

const oddOrEven = computed(() => {
  if (count.value % 2 === 0) return 'even'
  return 'odd'
})**/

</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 30px;
  margin: 10px;
  cursor: pointer;
}
</style>