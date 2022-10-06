<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  label: {
    type: String,
    default: 'I am a label',
  },
});
</script>
<template>
  <label><slot>{{ label }}</slot></label>
</template>
