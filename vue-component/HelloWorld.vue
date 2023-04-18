<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  count: number;
}>();
const countValue = ref(props.count);
const double = computed(() => countValue.value * 2);

const increase = () => {
  countValue.value++;
};
</script>

<template>
  <div class="greetings">
    <h3>
      <div>Double of count: {{ double }}</div>
      <div>Count value: {{ countValue }}</div>
      <button @click="increase()">Increase</button>
    </h3>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
