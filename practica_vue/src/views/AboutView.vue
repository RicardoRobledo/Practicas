<template>

    <!-- Encabezado -->

    <EncabezadoPastelero/>

    <!-- Formulario -->
	
	<FormularioPastelero/>
    
</template>

<script>
// @ is an alias to /src
import EncabezadoPastelero from '@/components/EncabezadoPastelero.vue'
import FormularioPastelero from '@/components/FormularioPastelero.vue'

export default {
  name: 'HomeView',
  data() {
   
  },
  methods:{
  },
  components:{
	  EncabezadoPastelero,
	  FormularioPastelero
  }
}
</script>

