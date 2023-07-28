import axios from 'axios';

export default {
  state: {
    favorites: {},
  },
  getters: {
    favorites: (state) => state.favorites,
  },
  actions: {
		fetchFavorites({ commit }) {
			return new Promise((resolve, reject) => {
				axios.get('https://swapi.dev/api/people/')
					.then((response) => {
						commit('SET_PEOPLES', response.data);
						resolve(response.data);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
	},
  mutations: {
    SET_FAVORITES(state, payload) {
      state.favorites = payload;
    },
  },
};