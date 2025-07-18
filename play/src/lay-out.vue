<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
