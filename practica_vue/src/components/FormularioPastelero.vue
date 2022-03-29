<template>    
<form @submit.prevent="no">

        <div style="text-align:center;">

	    	<table border="10" padding="10px" style="margin: 0 auto;">

				<tr>
					<td id="nueva_fuente">Nombre:</td>

					<td>
						{{$store.state.nombre}}
					</td>
				</tr>


          <tr>
					<td id="nueva_fuente">Telefono:</td>

					<td>
						{{$store.state.telefono}}
					</td>
				</tr>


				<tr>
					<td id="nueva_fuente">Correo electronico:</td>

					<td>
						{{$store.state.correo}}
					</td>
				</tr>


				<tr>
					<td id="nueva_fuente">Descripcion general del pastel:</td>

					<td>
						{{$store.state.descripcion}}
					</td>
				</tr>


	            <tr>
					<td id="nueva_fuente">Sabor(es)</td>

					<td>

					   {{$store.state.sabores}}

					</td>
				</tr>


				<tr>
					<td id="nueva_fuente">Estilo:</td>

					<td>

          {{$store.state.estilo}}

					</td>
				</tr>


        <tr>
					<td id="nueva_fuente">Total a pagar:</td>

					<td>

          {{$store.state.total}}

					</td>
				</tr>

			</table>

		</div>

    </form>

</template>

<script>
export default {
  name: 'FormularioPastelero',
}
</script>

