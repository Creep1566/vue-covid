import Vue from 'vue'
import Vuex from 'vuex'
import cityInfo from "./cityInfo"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cityInfo
    }
})