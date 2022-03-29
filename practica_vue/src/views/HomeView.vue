<template>

  <img v-bind:src="require('@/components/logo.png')" >

    <!-- Encabezado -->

    <EncabezadoCliente/>

    <!-- Lista de pasteles -->

    <EstilosPastelesCliente/>

    <!-- Formulario -->

    <FormularioCliente/>    

    <!-- Pie de pagina -->

    <PiePaginaCliente/>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import EncabezadoCliente from '@/components/EncabezadoCliente.vue'
import EstilosPastelesCliente from '@/components/EstilosPastelesCliente.vue'
import FormularioCliente from '@/components/FormularioCliente.vue'
import PiePaginaCliente from '@/components/PiePaginaCliente.vue'


export default {
  name: 'HomeView',
  components: {
    EncabezadoCliente,
    EstilosPastelesCliente,
    FormularioCliente,
    PiePaginaCliente
  }
}
</script>

<style>
body{
	background: rgb(237,237,237);
  background: linear-gradient(0deg, rgba(237,237,237,1) 0%, rgba(207,207,207,1) 51%, rgba(122,208,219,1) 100%);
}

header {
	font-family: Roboto;
	text-align: center;
}

#izquierda {
	float: left;
	padding: 40px;
}

#derecha{
	padding: 40px;
	float: none;
}

table{
	background-color: #CBFFFC;
  border-radius: 40px;
  border-color: #83B69B;
  border-style: solid;
  box-shadow: 0px 20px 50px #828282;
}

td{
	padding: 30px;
  border: none;
	text-align: left;
}

#td2{
	text-align: center;
}

button{
	font-weight: bold;
	width: 100px;
	height: 50px;
}

#nueva_fuente{
	font-weight: bold;
	font-family: "Lato"
}

#bold{
  font-weight: bold;
}

form{
  border-width: 0px;
}

.margen{
  margin-top: 60px;
}

.alineacion_pie_pagina{
  text-align: left;
}

.contenedor{
  width: 200px;
  margin-left: 45%;
  margin-top: 50px;
}

.tamanio_imagen{
  width: 300px;
  height: 100px;
}

button {
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:hover{
  background-color: #01A0D5;
}
</style>