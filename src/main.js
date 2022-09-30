
const form  = document.getElementById('formPrueba');

form.addEventListener('submit', (event) => {
    event.preventDefault();

	const nombre = form.elements['nombre'];

	const apellido = form.elements['apellido'];

    const email = form.elements['email'];

    const edad = form.elements['edad'];

    const direccion = form.elements['direccion'];

    const trabajo = form.elements['trabajo'];

    validarTrabajo (trabajo.value)
    validarDireccion(direccion.value)
	validarEdad (edad.value)
    validarEmail(email.value)
    validarApellido(apellido.value)
	validarNombre(nombre.value)

});

function validarNombre(nombre){
	!nombre && swal("Ingrese su nombre");
}

function validarApellido(apellido){
	!apellido && swal("Ingrese su apellido");
}

function validarEmail(email){
    !email && swal("Ingrese su email");
}
function validarEdad(edad){
    !edad && swal("Ingrese su edad");
}

function validarDireccion(direccion){
    !direccion && swal("Ingrese su direccion");
}

function validarTrabajo(trabajo){
    !trabajo && swal("Ingrese algun trabajo o Desocupado");

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

		const $li = document.createElement("li");
        $li.textContent = hobbie.hobbie;
        $contenedorHobbies.appendChild($li);
	};
	
    });


const $fileInput = document.getElementById('image')
const $dropZone = document.getElementById('result-image')
const $img = document.getElementById('img-result')

$dropZone.addEventListener('click', () => $fileInput.click())

$dropZone.addEventListener('dragover', (e) => {
	e.preventDefault()

	$dropZone.classList.add('form-file__result--active')
})

$dropZone.addEventListener('dragleave', (e) => {
	e.preventDefault()

	$dropZone.classList.remove('form-file__result--active')
})

const uploadImage = (file) => {
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)

	fileReader.addEventListener('load', (e) => {
		$img.setAttribute('src', e.target.result)
	})
}

$dropZone.addEventListener('drop', (e) => {
	e.preventDefault()

	$fileInput.files = e.dataTransfer.files
	const file = $fileInput.files[0]

	uploadImage(file)
})

$fileInput.addEventListener('change', (e) => {
	const file = e.target.files[0]

	uploadImage(file)
})


fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then( (resp) => resp.json() )
    .then( (data) => {
		console.log( data.provincias)
    })








