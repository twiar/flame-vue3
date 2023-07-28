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
  localData: false,
});

const count = ref(0);
const next = ref(null);
const previous = ref(null);
const search = ref("");
const searchResults = ref({});
let delay: number;

const getPage = (val: string) => {
  store.dispatch("fetchPeoples", val).then(() => {
    props.value.results = store.getters.peoples.results;
    count.value = store.getters.peoples.count;
    next.value = store.getters.peoples.next;
    previous.value = store.getters.peoples.previous;
  });
}

const getList = (val: string) => {
  store.dispatch("fetchPeoplesSearch", val).then(() => {
    searchResults.value = store.getters.peoplesSearch.results;
  });
}

const toSingle = (val: string) => {
	router.push(`/peoples/${val.split('/')[val.split('/').length - 2]}`);
}

watch(search, (newVal, oldVal) => {
  clearTimeout(delay);
  if (newVal.length > 0) {
    delay = setTimeout(() => {
      getList(`https://swapi.dev/api/people/?search=${newVal}`);
    }, 500);
    console.log(delay);
  }
});

onBeforeMount(() => {
  getPage('https://swapi.dev/api/people/');
});
</script>

<template>
  <a href="#" @click="router.go(-1)">Back</a>
  <h1>Peoples <span v-if="store.getters.peoplesStatus === 'default'">({{ count }})</span></h1>
  <div v-if="store.getters.peoplesStatus === 'default'" class="search-container">
    <input type="search" v-model="search" class="search" placeholder="Search..." :disabled="store.getters.peoplesSearchStatus === 'wait'" />
    <div v-if="store.getters.peoplesSearchStatus === 'wait' && search.length > 0" class="fixed-list">
      <div class="static">Loading...</div>
    </div>
    <div v-if="searchResults.length > 0 && search.length > 0 && store.getters.peoplesSearchStatus === 'default'" class="fixed-list">
      <div v-for="item in searchResults" @click="toSingle(item['url'])">{{ item['name'] }}</div>
    </div>
    <div v-if="searchResults.length === 0 && search.length > 0 && store.getters.peoplesSearchStatus === 'default'" class="fixed-list">
      <div class="static">Not Found</div>
    </div>
  </div>
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
