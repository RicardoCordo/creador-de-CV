
const CLAVE_DATOS_PERSONALES = "CLAVE_DATOS_PERSONALES";

const obtenerItemAlmacenamiento = (clave) => {
	return JSON.parse(localStorage.getItem(clave));
}
let datos = obtenerItemAlmacenamiento(CLAVE_DATOS_PERSONALES)

let dataImage = localStorage.getItem('image');
bannerImg = document.getElementById('tableBanner');
bannerImg.src = dataImage;


document.getElementById('nombre').innerHTML = "Nombre: " + datos.nombre;
document.getElementById('apellido').innerHTML = "Apellido: " + datos.apellido;
document.getElementById('nacimiento').innerHTML = "Fecha de nacimento: " + datos.nacimiento;
document.getElementById('email').innerHTML = "Email: " + datos.email;
document.getElementById('edad').innerHTML = "Edad: " + datos.edad;
document.getElementById('provincia').innerHTML = "Provincia de Residencia: " + datos.provincia;
document.getElementById('direccion').innerHTML = "Direccion: " + datos.direccion;
document.getElementById('telefono').innerHTML = "N° Telefono: " + datos.telefono;
document.getElementById('estudios').innerHTML = "<u>Grado de estudio: <br></u>" + datos.estudio + " <br> " + datos.infoEstudios;
document.getElementById('primerTrabajo').innerHTML = "<u>Empleo mas reciente: <br></u>" + datos.primerTrabajo;
document.getElementById('primerEmpleador').innerHTML = "<u>Numero empleador: <br></u> " + datos.primerEmpleador;
document.getElementById('telefonoPrimerEmpleador').innerHTML = "<u>Telefono del empleador: <br></u>" + datos.telefonoPrimerEmpleador;
document.getElementById('primerDescripcion').innerHTML = "<u>Descripcion del trabajo: <br></u>" + datos.primerDescripcion;
document.getElementById('segundoTrabajo').innerHTML = "<u>Empleo previo: <br></u>" + datos.segundoTrabajo;
document.getElementById('segundoEmpleador').innerHTML = "<u>Numero empleador: <br></u>" + datos.segundoEmpleador;
document.getElementById('telefonoSegundoEmpleador').innerHTML = "<u>Telefono del empleador: <br></u>" + datos.telefonoSegundoEmpleador;
document.getElementById('segundaDescripcion').innerHTML = "<u>Descripcion del trabajo: <br></u>" + datos.segundaDescripcion;








