import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import sourceData from "@/data/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: sourceData.users,
    authId: null,
    players: sourceData.players,
    teams: sourceData.teams
  },
  mutations: {
    setItem(state, { item, id, resource }) {
      item[".key"] = id;
      Vue.set(state[resource], id, item);
    },

    setAuthId(state, id) {
      state.authId = id;
    },

    // the set method needs 3 arguments:
    // 1 The Object to add the new property to
    // 2. The property name
    // 3. The value of the property

    setPlayer(state, { player, playerId }) {
      Vue.set(state.players, playerId, player);
    },

    appendPlayerToTeam(state, { playerId, teamId }) {
      const team = state.teams[teamId];
      Vue.set(team.players, playerId, playerId);
    },
    appendPlayerToUser(state, { playerId, userId }) {
      const user = state.users[userId];
      Vue.set(user.players, playerId, playerId);
    },

    setUser(state, { user, userId }) {
      Vue.set(state.users, userId, user);
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

    updateUser({ commit }, user) {
      commit("setUser", { userId: user[".key"], user });
    },

    createPlayer(context, player) {
      const playerId = "greatPlayer" + Math.random();
      player[".key"] = playerId;
      context.commit("setPlayer", { player, playerId });
      context.commit("appendPlayerToTeam", { teamId: player.teamId, playerId });
      context.commit("appendPlayerToUser", { userId: player.userId, playerId });
    },
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
