<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import Table from "@/components/Table";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchPeoples");
});
</script>

<template>
  <h1>Peoples</h1>
  <Table />
</template>

<style>
</style>
