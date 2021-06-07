
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
      url: 'https://60afff581f26610017ffdad9.mockapi.io/usuarios',
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
      const response = await this.axios.post(this.url, usuario)
      console.log('response status code with async await: ', response.status)
    },

    postUsuarioThenCatch() {
      const usuario = { "name": 'then catch' + this.formData.nombre, "email": this.formData.email, "age": this.formData.edad }
      this.axios.post(this.url, usuario)
        .then(response => this.usuario = response.status)
        .catch(error => {
          this.errorMessage = error.message
          console.error("There was an error!", error);
        })
    }
  }
}


