import * as api from '../../api/user'

const state = {
    token:null,
    drawer:null
}
const mutations = {
    SET_TOKEN (state, token) {
        state.token =token
      },
    SET_drawer (state, drawer) {
        state.drawer =drawer
      },
}
const actions = {
    login({commit},info){
        return new Promise((res,rej) => {
            api.login(info)
            .then(response =>{
                const {data} = response
                commit('SET_TOKEN',data.token)
                localStorage.setItem('TokenKey',data.token)
                console.log(response);
                res(data)
            })  .catch(error => { 
                reject(error);
            });
        })
    }
}

 

export default{
    namespaced:true,
    state,
    mutations,actions
}