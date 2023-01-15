<template>
  <div>
    The Parent
  </div>
  <TheChild />
</template>

<script>
import TheChild from '@/components/TheChild.vue';

export default {
  name: 'TheParent',
  components: {TheChild}, 
}
</script>

<style>
div {
  margin-top: 2rem;
}
</style>