<script setup lang="ts">
import { ref } from 'vue';
import ViButton from '../ViButton/ViButton.vue';
const name = ref('Alex');

const toggleThing = () => {
  if (name.value === 'Alex') {
    name.value = 'Nick'
  } else {
    name.value = 'Alex'
  }
};
</script>
<template>
  <div style="text-align: center">
    <ViButton @click="toggleThing">Toggle Name</ViButton>
    <h3>{{ name }}</h3>
  </div>
</template>
