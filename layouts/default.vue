<script setup lang="ts">
</script>
<template>
  <div class="w-screen scroll-smooth">
    <slot />
  </div>
</template>

<style lang="postcss">
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  background-color: #f4f4f5;
  margin: 0;
  padding: 0;
  color: #18181b;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

a {
  color: #18181b;
  text-decoration: none;
}
</style>
