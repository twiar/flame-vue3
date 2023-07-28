import axios from 'axios';

export default {
  state: {
    peoples: [],
		peoplesStatus: 'default',
  },
  getters: {
    peoples: (state) => state.peoples,
    peoplesStatus: (state) => state.peoplesStatus,
  },
  actions: {
		fetchPeoples({ commit }, payload) {
			return new Promise((resolve, reject) => {
				commit('setPeoplesStatus', 'wait');
				axios.get(payload)
					.then((response) => {
						commit('setPeoples', response.data);
						resolve(response.data);
					})
					.catch((error) => {
						reject(error);
					})
					.finally(() => {
            commit('setPeoplesStatus', 'default');
          });
			});
		},
	},
  mutations: {
    setPeoples(state, payload) {
      state.peoples = payload;
    },
		setPeoplesStatus(state, payload) {
      state.peoplesStatus = payload;
    },
  },
};