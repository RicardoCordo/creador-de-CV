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
/* pense en agregar un while a trabajos pero la verdad no supe bien como linkearlo para que me vuelva al formulario a pedir el dato, se que si no recurriera al formulario y lo pidiera por prompt seria algo asi:
    let trabajos = prompt ("ingrese sus trabajos")
    while(trabajos != "ESC")
    alert("puede ingresar trabajos hasta que escriba "ESC" ")
*/