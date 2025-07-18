<script setup lang="ts"></script>

<template>
  <div class="flex">
    <slot />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 1rem;
}
</style>
