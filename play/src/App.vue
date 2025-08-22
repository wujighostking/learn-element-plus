<script setup lang="ts">
import Alert from '@/Alert.vue'
import Button from '@/Button.vue'
import Calendar from '@/Calendar.vue'
import Icon from '@/Icon.vue'
import LayOut from '@/lay-out.vue'
import Link from '@/Link.vue'
import Timeline from '@/Timeline.vue'
</script>

<template>
  <LayOut>
    <Icon />
    <hr>

    <Button />
    <hr>

    <Link />
    <hr>

    <Alert />
    <hr>

    <Timeline />
    <hr>

    <Calendar />
  </LayOut>
</template>

<style scoped>
hr {
  width: 100%;
}
</style>
