<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute();
console.log(route.params);
</script>

<template>
  <h1>People {{ route.params.id }}</h1>
</template>

<style>
</style>
