// mi idea de proyecto es crear una pagina que genere Curriculum Vitae

const form  = document.getElementById('formPrueba');

form.addEventListener('submit', (event) => {
    console.log("ingrese al formulario")
    event.preventDefault();

    const email = form.elements['email'];
    console.log("Email ",email.value)

    const edad = form.elements['edad'];
    console.log("Edad ", edad.value)

    const direccion = form.elements['direccion'];
    console.log("Direccion ", direccion.value)

    const trabajo = form.elements['trabajo'];
    console.log("Trabajo actual ", trabajo.value)


    validarEmail(email.value)
    validarEdad (edad.value)
    validarDireccion(direccion.value)
    validarTrabajo (trabajo.value)
    imprimirValoresFormulario(form)
});
function validarEmail(email){
    if(email === "")
    alert ("Ingrese email nuevamente")
}
function validarEdad(edad){
    if(edad === "")
    alert ("Ingrese edad nuevamente")
}

function validarDireccion(direccion){
    if(direccion=== "")
    alert ("Ingrese dirección nuevamente")
}

function validarTrabajo(trabajo){
    if(trabajo ===""){
        alert( "Ingrese algun trabajo o desocupado")
    }

}

function imprimirValoresFormulario(formulario){
    for (let i = 0; i < 4; i++) {
        alert("usted ingreso la siguiente informacion personal "+formulario.elements[i].value);
    
    }
}

const CLAVE_LOCALSTORAGE = "lista_hobbies";
document.addEventListener("DOMContentLoaded", () => {
	let hobbies = []; 
	const $contenedorHobbies = document.querySelector("#contenedorHobbies"),
		$btnGuardarHobbie = document.querySelector("#btnAgregarHobbie"),
		$inputNuevoHobbie = document.querySelector("#inputNuevoHobbie");

	$btnGuardarHobbie.onclick = () => {
		const hobbie = {hobbie: $inputNuevoHobbie.value};
		if (!hobbie) {
			return;
		}
		$inputNuevoHobbie.value = "";

        guardarHobbieEnAlmacenamiento(hobbie)
    };


        const $li = document.createElement("li");
        $li.textContent = hobbie.hobbie
        $contenedorHobbies.appendChild($li);

		guardarHobbieEnAlmacenamiento();
	
	const obtenerHobbiesDeAlmacenamiento = () => {
		const posibleLista = JSON.parse(localStorage.getItem(CLAVE_LOCALSTORAGE));
		if (posibleLista) {
			return posibleLista;
		} else {
			return [];
		}
	};

	const guardarHobbieEnAlmacenamiento = (hobbie) => {
        let hobbies = obtenerHobbiesDeAlmacenamiento();
        hobbies.push(hobbie);
		localStorage.setItem(CLAVE_LOCALSTORAGE, JSON.stringify(hobbies));
	};
    

});





