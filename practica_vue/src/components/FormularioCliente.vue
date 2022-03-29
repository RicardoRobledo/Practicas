<template>
<h2 align="center">¿Como vas a querer tu pastel?</h2>


    <form @submit.prevent="no">

        <div style="text-align:center;">

	    	<table border="10" padding="10px" style="margin: 0 auto;">

				<tr>
					<td id="nueva_fuente">Nombre:</td>

					<td>
						<input type="text" name="text" id="text">
					</td>
				</tr>


          <tr>
					<td id="nueva_fuente">Telefono:</td>

					<td>
						<input type="tel" name="number" id="number">
					</td>
				</tr>


				<tr>
					<td id="nueva_fuente">Correo electronico:</td>

					<td>
						<input type="email" id="email" name="email">
					</td>
				</tr>


				<tr>
					<td id="nueva_fuente">Descripcion general del pastel:</td>

					<td>
						<textarea id="txtarea" name="txtarea" rows="4" cols="50"></textarea>
					</td>
				</tr>


	            <tr>
					<td id="nueva_fuente">Selecciona sabor(es)</td>

					<td>

						<!-- Sabores -->


					    <input type="checkbox" id="chocolate" value="200">
					    <label>Pastel de chocolate $200</label>


					    <br>


					    <input type="checkbox" id="vainilla" value="150">
					    <label>Pastel de vainilla $150</label>


					    <br>


					    <input type="checkbox" id="limon" value="250">
					    <label>Pastel de limon $250</label>

					</td>
				</tr>


				<tr>
					<td id="nueva_fuente">Selecciona estilo:</td>

					<td>
						<input type="radio" id="dbz" name="opt" value="Dragon Ball Z">
						<label>Dragon ball Z</label>

						<br>

						<input type="radio" id="naruto" name="opt" value="Naruto">
						<label>Naruto</label>

						<br>

						<input type="radio" id="sao" name="opt" value="Sword Art Online">
						<label>Sword art online</label>

						<br>

						<input type="radio" id="lain" name="opt" value="Lain">
						<label>Lain</label>
					</td>
				</tr>


				<tr>
					<td colspan="2" id="td2">
						<button @click="enviar">Enviar</button>
					</td>
				</tr>


			</table>

		</div>

    </form>
</template>

<script>
export default {
  name: 'FormularioCliente',
  methods:{
      no(){
      },
      enviar(){

        var text = document.getElementById("text").value
        var number = document.getElementById("number").value
        var email = document.getElementById("email").value
        var txtarea = document.getElementById("txtarea").value
        var estilo = obtenerEstilo()
        var sabores = obtenerSabores()

        if(text=="" ||  number=="" || email=="" || txtarea=="" || estilo=="error" || sabores==[]){
          alert("ERROR!, debes asegurarte de hacer puesto informacion en todos los campos")
        }else{
          this.$store.commit("enviarNombre", text)
          this.$store.commit("enviarTelefono", number)
          this.$store.commit("enviarCorreo", email)
          this.$store.commit("enviarDescripcion", txtarea)
          this.$store.commit("enviarEstilo", estilo)
          this.$store.commit("enviarSabores", sabores)
        }

      }
  }
}

function obtenerEstilo(){

  var radios = document.getElementsByName('opt')

  for (var i=0; i<radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value
    }
  }

  return "error"

}

function obtenerSabores(){

  var sabores = []

  if(document.getElementById("chocolate").checked){
    sabores.push(document.getElementById("chocolate").value)
  }

  if(document.getElementById("vainilla").checked){
    sabores.push(document.getElementById("vainilla").value)
  }

  if(document.getElementById("limon").checked){
    sabores.push(document.getElementById("limon").value)
  }

  return sabores

}
</script>