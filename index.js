const $botonAccion = document.querySelector("#accion");

$botonAccion.onclick = function(){
	const primerNombre = document.querySelector("#primer-nombre").value;
	const segundoNombre = document.querySelector("#segundo-nombre").value;
	const apellido = document.querySelector("#apellido").value;
	const edad = document.querySelector("#edad").value;
	const titulo = document.querySelector("h1");
	document.querySelector("h1").innerText = ("Bienvenido! " + primerNombre);
	document.querySelector("#campo").innerText = (`Nombre: ${primerNombre} \n Segundo nombre: ${segundoNombre} \n Apellido: ${apellido} \n Edad: ${edad} `);
	document.querySelector("#campo").style.padding="10px";
	return false;
}
