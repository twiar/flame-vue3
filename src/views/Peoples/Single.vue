<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRoute } from 'vue-router';
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const result = ref({});

const getPeople = (val: string) => {
  store.dispatch("fetchPeople", val).then(() => {
    result.value = store.getters.people;
  });
}

onBeforeMount(() => {
  getPeople(`https://swapi.dev/api/people/${route.params.id}`)
});
</script>

<template>
  <h1>People {{ route.params.id }}</h1>
  <div v-for="(value, name, index) in result">
    <div v-if="typeof value === 'string'">{{ name }}: <b>{{ value ? value : '-' }}</b></div>
    <div v-if="typeof value === 'object'" class="list-box">{{ name }}: 
      <span v-if="value.length === 0">-</span>
      <div v-if="value.length !== 0">
        <div v-for="item in value">
          <b>{{ item }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
