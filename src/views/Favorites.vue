<script setup lang="ts">
import { ref, onBeforeMount, watch } from "vue";
import { useStore } from "vuex";
import Table from "@/components/Table";
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const props = ref({
  columns: [
    "name",
    "height",
    "mass",
    "hair_color",
  ],
  results: [],
});

const loaded = ref(false);

onBeforeMount(() => {
  for (let key in localStorage){
		if (!isNaN(key)) {
			props.value.results.push(JSON.parse(localStorage[key]));
		}
	}
  store.getters.favorites = props.value.results;
  loaded.value = true;
});
</script>

<template>
  <a href="#" @click="router.go(-1)">Back</a>
  <h1>Favorites</h1>
  <Table v-bind="props" v-if="loaded" />
</template>

<style>
</style>
