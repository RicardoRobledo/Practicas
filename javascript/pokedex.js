const fetchPokemon = () => {

    const pokeName = document.getElementById("pokeName");
	let pokeInput = pokeName.value;

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
    	//console.log(res);
    	return res.json();
    }).then((data) => {
    	//console.log(data);
    	let pokeImg = data.sprites.front_default;
    	pokeImage(pokeImg);
		let pokeEtiqueta = data.species.name;
		pokeEt(pokeEtiqueta);
		let pokeT = data.types[0].type.name;
		pokeType(pokeT);
		let pokeEst = "hp: " + data.stats[0].base_stat + ", " +
		            "ataque: " + data.stats[1].base_stat + ", " +
					"defensa: " + data.stats[2].base_stat + ", " +
					"ataque especial: " + data.stats[3].base_stat + ", " +
					"defensa especial: " + data.stats[4].base_stat + ", " +
					"velocidad: " + data.stats[5].base_stat;
		pokeEstadisticas(pokeEst);
		let pokeMov = "1: " + data.moves[0].move.name + ", " +
					"2: " + data.moves[1].move.name + ", " +
					"3: " + data.moves[2].move.name + ", " +
					"4: " + data.moves[3].move.name + ", " +
					"5: " + data.moves[4].move.name + ", " +
					"6: " + data.moves[5].move.name;
		pokeMovimientos(pokeMov);
    })

}


const pokeImage = (url) => {
	const pokeImg = document.getElementById("pokeImg");
	pokeImg.src = url
}


const pokeEt = (url) => {
	const pokeEtiqueta = document.getElementById("pokeEtiqueta");
	pokeEtiqueta.textContent = url
}

const pokeEstadisticas = (url) => {
	const pokeEstadisticas = document.getElementById("pokeEtiqueta3");
	pokeEstadisticas.textContent = url
}


const pokeMovimientos = (url) => {
	const pokeMov = document.getElementById("pokeEtiqueta4");
	pokeMov.textContent = url
}


const pokeType = (url) => {
	const pokeT = document.getElementById("pokeEtiqueta2");
	pokeT.textContent = url
}


const imprimir = () => {
	console.log("Hola " + pokeInput);
}