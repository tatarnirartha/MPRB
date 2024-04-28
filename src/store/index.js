import Vue from "vue";
import Vuex from "vuex";
import themes from "./modules/themes/index.js"

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		themes
	}
});
