import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre: "...",
    total: 0,
    telefono: "...",
    correo: "...",
    descripcion: "...",
    estilo: "...",
    sabores: "...",
  },
  getters: {
    getNombre(state) {
      return nombre
    },
    getTelefono(state) {
      return telefono
    },
    getCorreo(state) {
      return correo
    },
    getDescripcion(state) {
      return descripcion
    },
    getEstilo(state) {
      return estilo
    },
    getSabores(state) {
      return sabores
    },
    getTotal(state) {
      return total
    }
  },
  mutations: {
    enviarNombre(state, nombre) {
      state.nombre = nombre
    },
    enviarTelefono(state, telefono) {
        state.telefono = telefono
    },
    enviarCorreo(state, correo) {
        state.correo = correo
    },
    enviarDescripcion(state, descripcion) {
        state.descripcion = descripcion
    },
    enviarSabores(state, sabores) {

      state.sabores = ""
      state.total = 0

      sabores.forEach(sabores => {

        if(sabores=="200"){
          state.sabores+="chocolate, "
        }

        if(sabores=="250"){
          state.sabores+="limon, "
        }

        if(sabores=="150"){
          state.sabores+="vainilla, "
        }

        state.total+=parseInt(sabores)

      });

      state.sabores=state.sabores.substring(0, state.sabores.length-2)

    },
    enviarEstilo(state, estilo) {
        state.estilo = estilo
    }
  },
  actions: {
  },
  modules: {
  }
})
