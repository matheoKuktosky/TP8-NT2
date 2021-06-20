
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 10,
      edadMin : 18,
      edadMax : 120,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    enviar() {
      this.postUsuarioAsyncAwait()
      this.postUsuarioThenCatch()
      this.formData = this.getInicialData()
      this.formState._reset()
    },

    async postUsuarioAsyncAwait() {
      const usuario = { "name": 'async await' + this.formData.nombre, "email": this.formData.email, "age": this.formData.edad }
      this.$store.dispatch('postUsuarioAsyncAwait', usuario)
    },

    postUsuarioThenCatch() {
      const usuario = { "name": 'then catch' + this.formData.nombre, "email": this.formData.email, "age": this.formData.edad }
      this.$store.dispatch('postUsuarioThenCatch', usuario)
    }
  }
}


