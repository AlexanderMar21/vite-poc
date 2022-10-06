<script setup lang="ts">
  const onClick = (e: Event) => {
    console.log('clicked');
  }
  </script>
  <template>
    <button @click="onClick"><slot>I am a button</slot></button>
  </template>