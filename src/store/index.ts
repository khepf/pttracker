import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: {},
    authId: null,
    players: {},
    teams: {}
  },
  mutations: {
    setItem(state, { item, id, resource }) {
      item[".key"] = id;
      Vue.set(state[resource], id, item);
    },

    setAuthId(state, id) {
      state.authId = id;
    }
  },
  actions: {
    fetchItem({ state, commit }, { id, emoji, resource }) {
      console.log("🔥‍", emoji, id);
      return new Promise((resolve, reject) => {
        firebase
          .database()
          .ref(resource)
          .child(id)
          .once("value", snapshot => {
            commit("setItem", {
              resource,
              id: snapshot.key,
              item: snapshot.val()
            });
            resolve(state[resource][id]);
          });
      });
    },

    fetchItems({ dispatch }, { ids, resource, emoji }) {
      ids = Array.isArray(ids) ? ids : Object.keys(ids);
      return Promise.all(
        ids.map((id: any) => dispatch("fetchItem", { id, resource, emoji }))
      );
    },
    fetchUser: ({ dispatch }, { id }) =>
      dispatch("fetchItem", { resource: "users", id, emoji: "🙋" }),
    fetchAuthUser({ dispatch, commit }) {
      const userId = firebase.auth().currentUser.uid;
      return dispatch("fetchUser", { id: userId }).then(() => {
        commit("setAuthId", userId);
      });
    },
    signInWithEmailAndPassword(context, { email, password }) {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    signOut({ commit }) {
      return firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setAuthId", null);
        });
    }
  },
  getters: {
    authUser(state: any) {
      return state.authId ? state.users[state.authId] : null;
    }
  },
  modules: {}
});
