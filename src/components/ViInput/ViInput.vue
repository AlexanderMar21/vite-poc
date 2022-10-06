<script setup lang="ts">
const onIput = (e: Event) => {
  console.log('hereee', e);
}
</script>
<template>
  <input type="text" @input="onIput" />
</template>