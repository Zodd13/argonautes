import { createStore } from "vuex";
const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default createStore({
  state: {
    crewMember: {
      id:"",
      name: ""
    },
    crewList:{
      id:"",
      name:""
    }
  },
  mutations: {
    crewMember(state, crewMember) {
      state.crewMember = crewMember;
    },
    crewList(state, crewList) {
      state.crewList = crewList;
    }
  },
  actions: {
    addMember: ({ commit }, crewMember) => {
      commit;
      return new Promise((resolve, reject) => {
        instance
          .post("/add", crewMember)
          .then(function (response) {
            commit;
            resolve(response);
          })
          .catch(function (error) {
            commit;
            reject(error);
          });
      });
    },
    deleteMember({commit}, crewMember){
      instance.delete("/delete/" + crewMember)
        .then(function(response){
          commit("crewMember", response.data);
        })
    },
    crewList: ({ commit }) => {
      instance
        .get("/crewlist")
        .then(function (response) {
          commit("crewList", response.data.crewList)
          console.log(response.data.crewList)
        })
        .catch(function (error) {
          return error;
        });
    },
  },
});
