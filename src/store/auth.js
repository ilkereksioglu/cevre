import api from '../services/api'
import axios from "axios"
import tokenService from '../services/token'

export default {
    namespaced: true,
    state: {
    },
    getters: {
    },
    actions: {
        async accessTokenGetir({commit}, refreshToken){
            return api.post('/tokengetir', refreshToken).then(
                (response) => {
                    commit('accessTokenGetirSuccess', user);
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit('accessTokenGetirFail', user);
                    return Promise.reject(error.data);
                }
            );
        },
        girisYap({commit}, kullanici){
            console.log(process.env.BASE_URL);
            return axios.post("https://localhost:44351/girisyap", kullanici).then(
                (response) => {
                    commit('girisYapSuccess', kullanici);
                    tokenService.setKullanici(response.data);
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit('girisYapFail', user);
                    return Promise.reject(error.data);
                }
            );
        }
    },
    mutations: {
        accessTokenGetirSuccess(state) { },
        accessTokenGetirFail(state) { },
        girisYapSuccess(state) { },
        girisYapFail(state) { },
    }
}