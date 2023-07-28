import axios from 'axios';

export default {
  state: {
		peoples: [],
    peoplesSearch: [],
    people: {},
		peoplesStatus: 'default',
		peoplesSearchStatus: 'default',
		peopleStatus: 'default',
  },
  getters: {
    peoples: (state) => state.peoples,
    peoplesSearch: (state) => state.peoplesSearch,
    people: (state) => state.people,
    peoplesStatus: (state) => state.peoplesStatus,
    peoplesSearchStatus: (state) => state.peoplesSearchStatus,
    peopleStatus: (state) => state.peopleStatus,
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
		fetchPeoplesSearch({ commit }, payload) {
			return new Promise((resolve, reject) => {
				commit('setPeoplesSearchStatus', 'wait');
				axios.get(payload)
					.then((response) => {
						commit('setPeoplesSearch', response.data);
						resolve(response.data);
					})
					.catch((error) => {
						reject(error);
					})
					.finally(() => {
            commit('setPeoplesSearchStatus', 'default');
          });
			});
		},
		fetchPeople({ commit }, payload) {
			return new Promise((resolve, reject) => {
				commit('setPeopleStatus', 'wait');
				axios.get(payload)
					.then((response) => {
						commit('setPeople', response.data);
						resolve(response.data);
					})
					.catch((error) => {
						reject(error);
					})
					.finally(() => {
            commit('setPeopleStatus', 'default');
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
		setPeople(state, payload) {
      state.people = payload;
    },

		setPeoplesSearch(state, payload) {
			state.peoplesSearch = payload;
		},
		setPeoplesSearchStatus(state, payload) {
			state.peoplesSearchStatus = payload;
    },
		setPeopleStatus(state, payload) {
			state.peopleStatus = payload;
    },
  },
};