<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Table from "@/components/Table";

const store = useStore();

const props = ref({
  columns: [
    "name",
    "height",
    "mass",
    "hair_color",
  ],
  results: {},
});

const count = ref(0);
const next = ref(null);
const previous = ref(null);

const getPage = (val: string) => {
  store.dispatch("fetchPeoples", val).then(() => {
    props.value.results = store.getters.peoples.results;
    count.value = store.getters.peoples.count;
    next.value = store.getters.peoples.next;
    previous.value = store.getters.peoples.previous;
  });
}

onMounted(() => {
  getPage('https://swapi.dev/api/people/');
});
</script>

<template>
  <h1>Peoples <span v-if="store.getters.peoplesStatus === 'default'">({{ count }})</span></h1>
  <div v-if="store.getters.peoplesStatus === 'wait'">Loading...</div>
  <div v-if="store.getters.peoplesStatus === 'default'">
    <nav>
      <div class="link" @click="getPage(previous)" v-if="previous">Prev</div>
      <div class="link" @click="getPage(next)" v-if="next">Next</div>
    </nav>
    <Table v-bind="props"/>
  </div>
</template>

<style>
</style>
