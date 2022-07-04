export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        UPDATEINFO(state, value) {
            state.fromCode = value.FromCode;
            state.toCode = value.ToCode;
        }
    },
    state: {
        fromCode: '0',
        toCode: '0',
    },
    getters: {

    }
}