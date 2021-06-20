import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const URL = 'https://60afff581f26610017ffdad9.mockapi.io/usuarios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarios : []
    },
    actions : {
        async getUsuarios({commit}) {
            try {
                let {data:usuarios} = await axios(URL)
                commit('getUsuarios',usuarios)
            }
            catch {
                commit('getUsuarios',[])
            }
        },
        async postUsuarioAsyncAwait({commit}, usuario) {
            try {
                await axios.post(URL, usuario)
                commit('postUsuarios',usuario)
            }
            catch(err) {
                console.log('Failed!', err)
            }
        },
        postUsuarioThenCatch({commit}, usuario){
        axios.post(URL, usuario)
        .then(usuario => commit('postUsuarios',usuario))
        .catch(error => {
          console.error("There was an error!", error)
        })
        }
    },
    mutations : {
        getUsuarios(state,usuarios) {
            state.usuarios = usuarios
        },
        postUsuarios(usuario){
            console.log(usuario)
        }
    }
})
