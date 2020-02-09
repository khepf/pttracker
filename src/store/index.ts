import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: {},
    teams: {},
    players: {},
    authId: null
  },
  actions: {
    fetchItem({ state, commit }, { id, emoji, resource }) {
      console.log("🔥‍", emoji, id, resource);
      return new Promise((resolve, reject) => {
        firebase
          .database()
          .ref(resource)
          .child(id)
          .once("value", snapshot => {
            console.log("fetchItem snapshot.val(", snapshot.val());
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
    // USERS

    fetchUser({ dispatch }, { id }) {
      return dispatch("fetchItem", { resource: "users", id, emoji: "🔥‍" });
    },

    fetchUsers({ dispatch }, { ids }) {
      return dispatch("fetchItems", { resource: "users", emoji: "🔥‍", ids });
    },

    // TEAMS

    fetchTeam({ dispatch }, { id }) {
      return dispatch("fetchItem", { resource: "teams", id, emoji: "🔥‍" });
    },
    fetchTeams({ dispatch }, { ids }) {
      return dispatch("fetchItems", { resource: "teams", emoji: "🔥‍", ids });
    },

    // PLAYERS
    fetchPlayer({ dispatch }, { id }) {
      return dispatch("fetchItem", { resource: "players", id, emoji: "🔥‍" });
    },
    fetchPlayers({ dispatch }, { ids }) {
      return dispatch("fetchItems", { resource: "players", emoji: "🔥‍", ids });
    },

    //////////////
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
  mutations: {
    setItem(state, { item, id, resource }) {
      item[".key"] = id;
      Vue.set(state[resource], id, item);
    },
    setUser(state, { user, userId }) {
      Vue.set(state.users, userId, user);
    },
    setTeam(state, { team, teamId }) {
      Vue.set(state.teams, teamId, team);
    },
    setPlayer(state, { player, playerId }) {
      Vue.set(state.players, playerId, player);
    },

    setAuthId(state, id) {
      state.authId = id;
    },

    // the set method needs 3 arguments:
    // 1 The Object to add the new property to
    // 2. The property name
    // 3. The value of the property

    appendPlayerToTeam(state, { playerId, teamId }) {
      const team = state.teams[teamId];
      Vue.set(team.players, playerId, playerId);
    },
    appendPlayerToUser(state, { playerId, userId }) {
      const user = state.users[userId];
      Vue.set(user.players, playerId, playerId);
    }
  },

  getters: {
    authUser(state: any) {
      // return state.authId ? state.users[state.authId] : null;
      return {};
    }
  },
  modules: {}
});
