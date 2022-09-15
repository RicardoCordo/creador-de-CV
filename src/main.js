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
	};

/* busque pero no encontre porque se agrega el hobbie en el storage pero no se agrega a la lista, creo que es porque donde dice hobbie.hobbie deberia declarar el indice pero no supe bien como realizarlo para que se agreguen a la lista del html a medida que se agreguen los hobbies al storage */
        const $li = document.createElement("li");
        $li.textContent = hobbie.hobbie;
        $contenedorHobbies.appendChild($li);

		guardarHobbieEnAlmacenamiento();
	
    });

// falta agregar estilos para que se vea la zona del drag pero igualmente funciona si se le arrastra encima
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






