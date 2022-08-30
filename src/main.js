// mi idea de proyecto es crear una pagina que genere Curriculum Vitae

const form  = document.getElementById('formPrueba');

form.addEventListener('submit', (event) => {
    console.log("ingrese al formulario")
    event.preventDefault();

    const email = form.elements['email'];
    console.log("Email ",email.value)

    const password = form.elements['password'];
    console.log("Password ", password.value)

    const direccion = form.elements['direccion'];
    console.log("Direccion ", direccion.value)

    const trabajos = form.elements['trabajos'];
    console.log("Trabajos ", trabajos.value)


    validarEmail(email.value)
    imprimirValoresFormulario(form)
    validarDireccion(direccion.value)
    cantidadTrabajos (trabajos.value)
});
function validarEmail(email){
    if(email === "")
    alert ("Ingrese email nuevamente")
}

function validarDireccion(email){
    if(email === "")
    alert ("Ingrese direccion nuevamente")
}

function imprimirValoresFormulario(formulario){
    for (let i = 0; i < 4; i++) {
        alert("usted ingreso el siguiente dato "+formulario.elements[i].value);
        
    }
// el numero 4 es por al numero de campos que agregue(email, contraseña, dirreccion y trabajos)
    
}

function cantidadTrabajos(trabajos){
    if(trabajos ===""){
        alert( "Ingrese algun trabajo")
    }

}

const hobbies = [];
let cantidad = 3;
do{
   let entrada = prompt("Ingresar 3 hobbies");
   hobbies.push(entrada);
   console.log(hobbies);
}while(hobbies.length != cantidad)
alert("los hobbies que eligio son " + hobbies);
/* mi idea es agregar un checkbox y bincularlo con el js, intente varias veces y no lo logre asi que lo hice mediante prompt. */