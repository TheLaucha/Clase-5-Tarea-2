const $botonAccion = document.querySelector("#accion");

$botonAccion.onclick = function(){
	const primerNombre = document.querySelector("#primer-nombre").value;
	const segundoNombre = document.querySelector("#segundo-nombre").value;
	const apellido = document.querySelector("#apellido").value;
	const edad = document.querySelector("#edad").value;
	const titulo = document.querySelector("h1");
	const primerNombreMayus = primerNombre.charAt(0).toUpperCase() + primerNombre.slice(1);
	const segundoNombreMayus = segundoNombre.charAt(0).toUpperCase() + segundoNombre.slice(1);
	const apellidoMayus = apellido.charAt(0).toUpperCase() + apellido.slice(1);
	document.querySelector("h1").innerText = ("Bienvenido! " + primerNombreMayus);
	document.querySelector("#campo").innerText = (`Nombre: ${primerNombreMayus} \n Segundo nombre: ${segundoNombreMayus} \n Apellido: ${apellidoMayus} \n Edad: ${edad} `);
	document.querySelector("#campo").style.padding="10px";
	return false;
}
