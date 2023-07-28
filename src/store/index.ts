import { createStore } from 'vuex';

import peoples from '@/store/components/peoples';

export default createStore({
	state: {
		...peoples.state,
	},
	getters: {
		...peoples.getters,
	},
	mutations: {
		...peoples.mutations,
	},
	actions: {
		...peoples.actions,
	},
	modules: {},
});