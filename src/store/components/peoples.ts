import axios from 'axios';

export default {
  state: {
    peoples: [],
  },
  getters: {
    peoples: (state) => state.peoples,
  },
  actions: {
		fetchPeoples({ commit }) {
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
    SET_PEOPLES(state, payload) {
      state.peoples = payload;
    },
  },
};