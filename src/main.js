
const form = document.getElementById('formPrueba');

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const nombre = form.elements['nombre'].value;

		const apellido = form.elements['apellido'].value;

		const nacimiento = form.elements['nacimiento'].value;

		const email = form.elements['email'].value;

		const edad = form.elements['edad'].value;

		const direccion = form.elements['direccion'].value;

		const telefono = form.elements['telefono'].value;

		const estudio = form.elements['estudio'].value;

		const infoEstudios = form.elements['infoEstudios'].value;

		const provincia = form.elements['provincia'].value;

		const primerTrabajo = form.elements['primerTrabajo'].value;

		const primerEmpleador = form.elements['primerEmpleador'].value;

		const telefonoPrimerEmpleador = form.elements['telefonoPrimerEmpleador'].value;

		const primerDescripcion = form.elements['primerDescripcion'].value;

		const segundoTrabajo = form.elements['segundoTrabajo'].value;

		const segundoEmpleador = form.elements['segundoEmpleador'].value;

		const telefonoSegundoEmpleador = form.elements['telefonoSegundoEmpleador'].value;

		const segundaDescripcion = form.elements['segundaDescripcion'].value;

		const image = form.elements['image'].value;

		const validacion = validarFormulario(nombre, apellido, nacimiento, email, edad, direccion, telefono, estudio, infoEstudios, provincia, primerTrabajo, primerEmpleador, telefonoPrimerEmpleador, primerDescripcion, segundoTrabajo, segundoEmpleador, telefonoSegundoEmpleador, segundaDescripcion, image);

		if (validacion) {
			const datosPersonales = { nombre: nombre, apellido: apellido, nacimiento: nacimiento, email: email, edad: edad, direccion: direccion, telefono: telefono, estudio: estudio, infoEstudios: infoEstudios, provincia: provincia, primerTrabajo: primerTrabajo, primerEmpleador: primerEmpleador, telefonoPrimerEmpleador: telefonoPrimerEmpleador, primerDescripcion: primerDescripcion, segundoTrabajo: segundoTrabajo, segundoEmpleador: segundoEmpleador, telefonoSegundoEmpleador: telefonoSegundoEmpleador, segundaDescripcion: segundaDescripcion };
			guardarDatosPersonalesEnAlmacenamiento(datosPersonales);

			const URL = './src/visualizacion-cv/visualizacion-cv.html';
			redirect(URL);
		}

	});
}

function validarFormulario(nombre, apellido, nacimiento, email, edad, direccion, telefono, primerTrabajo, primerEmpleador, telefonoPrimerEmpleador, primerDescripcion, segundoTrabajo, segundoEmpleador, telefonoSegundoEmpleador, segundaDescripcion, image) {
	return (
		validarImage(image) &&
		validarNombre(nombre) &&
		validarApellido(apellido) &&
		validarNacimiento(nacimiento) &&
		validarEmail(email) &&
		validarEdad(edad) &&
		validarDireccion(direccion) &&
		validarTelefono(telefono) &&
		validarPrimerTrabajo(primerTrabajo) &&
		validarPrimerEmpleador(primerEmpleador) &&
		validarTelefonoPrimerEmpleador(telefonoPrimerEmpleador) &&
		validarPrimerDescripcion(primerDescripcion) &&
		validarSegundoTrabajo(segundoTrabajo) &&
		validarSegundoEmpleador(segundoEmpleador) &&
		validarTelefonoSegundoEmpleador(telefonoSegundoEmpleador) &&
		validarSegundaDescripcion(segundaDescripcion)

	);
}

function validarImage(image) {
	if (!image) {
		swal("Debe ingresar una imagen")
		return false;
	}
	return true;
}

function validarNombre(nombre) {
	if (!nombre) {
		swal("Ingrese su nombre");
		return false;
	}
	return true;
}

function validarApellido(apellido) {
	if (!apellido) {
		swal("Ingrese su apellido");
		return false;
	}
	return true;
}

function validarNacimiento(nacimiento) {
	if (!nacimiento) {
		swal("Ingrese su fecha de nacimiento");
		return false;
	}
	return true;
}

function validarEmail(email) {
	if (!email) {
		swal("Ingrese su email");
		return false;
	}
	return true;
}

function validarEdad(edad) {
	if (!edad) {
		swal("Ingrese su edad");
		return false;
	}
	if (!parseInt(edad)) {
		swal("Ingrese un valor numérico en edad");
		return false;
	}
	return true;
}

function validarDireccion(direccion) {
	if (!direccion) {
		swal("Ingrese su direccion");
		return false;
	}
	return true;
}

function validarTelefono(telefono) {
	if (!telefono) {
		swal("Ingrese su telefono");
		return false;
	}
	return true;
}

function validarPrimerTrabajo(primerTrabajo) {
	if (!primerTrabajo) {
		swal("Debe ingresar al menos 2 empleos");
		return false;
	}
	return true;
}

function validarPrimerEmpleador(primerEmpleador) {
	if (!primerEmpleador) {
		swal("Debe ingresar el nombre de su empleador");
		return false;
	}
	return true;
}

function validarTelefonoPrimerEmpleador(telefonoPrimerEmpleador) {
	if (!telefonoPrimerEmpleador) {
		swal("Debe ingresar el telefono de su empleador");
		return false;
	}
	return true;
}

function validarPrimerDescripcion(primerDescripcion) {
	if (!primerDescripcion) {
		swal("Debe ingresaruna descripcion del trabajo realizado");
		return false;
	}
	return true;
}

function validarSegundoTrabajo(segundoTrabajo) {
	if (!segundoTrabajo) {
		swal("Debe ingresar al menos 2 empleos");
		return false;
	}
	return true;
}

function validarSegundoEmpleador(segundoEmpleador) {
	if (!segundoEmpleador) {
		swal("Debe ingresar el nombre de su empleador");
		return false;
	}
	return true;
}

function validarTelefonoSegundoEmpleador(telefonoSegundoEmpleador) {
	if (!telefonoSegundoEmpleador) {
		swal("Debe ingresar el telefono de su empleador")
		return false;
	}
	return true;
}

function validarSegundaDescripcion(segundaDescripcion) {
	if (!segundaDescripcion) {
		swal("Debe ingresar descripcion del trabajo realizado")
		return false;
	}
	return true;
}



function redirect(url) {
	window.location.href = url;
}

const guardarDatosPersonalesEnAlmacenamiento = (datosPersonales) => {
	const CLAVE_STORAGE_DATOS_PERSONALES = 'CLAVE_DATOS_PERSONALES';
	borrarItemAlmacenamiento(CLAVE_STORAGE_DATOS_PERSONALES);
	localStorage.setItem(CLAVE_STORAGE_DATOS_PERSONALES, JSON.stringify(datosPersonales));
};


const borrarItemAlmacenamiento = (clave) => {
	localStorage.removeItem(clave);
};

const CLAVE_DATOS_PERSONALES = "CLAVE_DATOS_PERSONALES";

const $fileInput = document.getElementById('image')
const $dropZone = document.getElementById('result-image')
const $img = document.getElementById('img-result')

if ($dropZone) {
	$dropZone.addEventListener('click', () => $fileInput.click())
	$dropZone.addEventListener('dragover', (e) => {
		e.preventDefault()

		$dropZone.classList.add('form-file__result--active')
	})

	$dropZone.addEventListener('dragleave', (e) => {
		e.preventDefault()

		$dropZone.classList.remove('form-file__result--active')
	})
	$dropZone.addEventListener('drop', (e) => {
		e.preventDefault()

		$fileInput.files = e.dataTransfer.files
		const file = $fileInput.files[0]

		uploadImage(file)
	})
}



const uploadImage = (file) => {
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)

	fileReader.addEventListener('load', (e) => {
		$img.setAttribute('src', e.target.result)
		localStorage.setItem("image", e.target.result);
	})
}

if ($fileInput) {
	$fileInput.addEventListener('change', (e) => {
		const file = e.target.files[0]
		uploadImage(file)
	})
}


fetch('https://apis.datos.gob.ar/georef/api/provincias')
	.then((resp) => resp.json())
	.then((data) => {
		const select = document.getElementById("provincia");
		let option;
		if (data.provincias) {
			for (let i = 0; i < data.provincias.length; i++) {
				option = document.createElement("option"),
					txt = document.createTextNode(data.provincias[i].nombre);
				option.appendChild(txt);
				option.setAttribute("value", data.provincias[i].nombre);
				if (select) select.insertBefore(option, select.lastChild);
			}
		}

	})


/*const CLAVE_LOCALSTORAGE_HOBBIES = "CLAVE_HOBBIES";
borrarItemAlmacenamiento(CLAVE_LOCALSTORAGE_HOBBIES);*/

/*document.addEventListener("DOMContentLoaded", () => {
	let hobbies = [];
	const $contenedorHobbies = document.querySelector("#contenedorHobbies"),
		$btnGuardarHobbie = document.querySelector("#btnAgregarHobbie"),
		$inputNuevoHobbie = document.querySelector("#inputNuevoHobbie");

	if ($btnGuardarHobbie) {
		$btnGuardarHobbie.onclick = () => {
			const hobbie = { hobbie: $inputNuevoHobbie.value };
			if (!hobbie) {
				return;
			}
			$inputNuevoHobbie.value = "";
			guardarHobbieEnAlmacenamiento(hobbie)
		};
	}*/

/*const obtenerHobbiesDeAlmacenamiento = () => {
	const CLAVE_LOCALSTORAGE_HOBBIES = 'CLAVE_HOBBIES';
	const posibleLista = JSON.parse(localStorage.getItem(CLAVE_LOCALSTORAGE_HOBBIES));
	if (posibleLista) {
		return posibleLista;
	} else {
		return [];
	}
};*/

/*const guardarHobbieEnAlmacenamiento = (hobbie) => {
	let hobbies = obtenerHobbiesDeAlmacenamiento();
	hobbies.push(hobbie);
	localStorage.setItem(CLAVE_LOCALSTORAGE_HOBBIES, JSON.stringify(hobbies));

	const $li = document.createElement("li");
	$li.textContent = hobbie.hobbie;
	$contenedorHobbies.appendChild($li);
};

});*/
