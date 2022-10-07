<script setup lang="ts">
const onClick = (e: Event) => {
  console.log('clicked');
};
</script>
<template>
  <button class="vi-button" @click="onClick"><slot>I am a button</slot></button>
</template>

<style lang="scss" src="./ViButton.scss" />