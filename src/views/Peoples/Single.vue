<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const router = useRouter();
const result = ref({});
const update = ref(false);

const getPeople = (val: string) => {
  store.dispatch("fetchPeople", val).then(() => {
    result.value = store.getters.people;
  });
}

const addFavorite = (val: string, content: Record<string, unknown>) => {
	update.value = true;
	localStorage.setItem(getId(val), JSON.stringify(content));
	update.value = false;
}

const removeFavorite = (val: string) => {
	update.value = true;
	localStorage.removeItem(getId(val));
	update.value = false;
}

const getId = (val: string) => val.split('/')[val.split('/').length - 2];

const favoriteCheck = (id: number) => {
	for (let key in localStorage){
		if (!isNaN(key)) {
			if (key === id) {
				return true
			}
		}
	}
	return false
}

onBeforeMount(() => {
  getPeople(`https://swapi.dev/api/people/${route.params.id}`)
});
</script>

<template>
  <a href="#" @click="router.go(-1)">Back</a>
  <h1>People {{ route.params.id }}</h1>
  <div v-if="store.getters.peopleStatus === 'wait'">Loading...</div>
  <div v-if="store.getters.peopleStatus === 'default'">
    <div class="list-box">
      <div v-if="!update">
        <span><b>Add/Remove to Favorites: </b></span>
        <button @click="addFavorite(result['url'], result)" v-if="!favoriteCheck(getId(result['url']))">Add</button>
        <button @click="removeFavorite(result['url'])" v-if="favoriteCheck(getId(result['url']))">Remove</button>
      </div>
      <div v-if="update">
        <span><b>Add/Remove to Favorites: </b></span>
        <button @click="addFavorite(result['url'], result)" v-if="!favoriteCheck(getId(result['url']))">Add</button>
        <button @click="removeFavorite(result['url'])" v-if="favoriteCheck(getId(result['url']))">Remove</button>
      </div>
      <!-- 
      <div style="width: 80px;" v-if="update">
        <button @click="addFavorite(row['url'], row)" v-if="!favoriteCheck(getId(row['url']))">Add</button>
        <button @click="removeFavorite(row['url'])" v-if="favoriteCheck(getId(row['url']))">Remove</button>
      </div> -->
    </div>
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
  </div>
</template>

<style>
</style>
