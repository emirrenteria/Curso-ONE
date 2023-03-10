var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // evita el comportamiento padron  del boton, en este caso por ej: recargar la pagina

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    
    var errores = validarPaciente(paciente);

    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return; // corta la funcion anomima, por lo tanto el codigo de abajo no se ejecuta, es como un break.
    }

    adicionarPacienteEnLaTabla(paciente);
    form.reset();  // limpia el formulario

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = ""; // limpia la lista de errores

});

function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturarDatosPaciente(form){
    // capturandolos datos del formulario
    var paciente = {
        nombre: form.nombre.value,
        peso:  form.peso.value,
        altura: form.altura.value,
        gordura:  form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
        }

        return paciente;
    }

function construirTr(paciente){
    // crear los tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
                        
    // Asignacion al tr de los td, y a la tabla tr
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr;

    }

    function construirTd(dato, clase){

        var td = document.createElement("td");
        td.classList.add(clase);
        td.textContent = dato;  // asignar los valores a la propiedad textContend
        return td;
    }

function validarPaciente(paciente){
    var errores = [];

    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura  no puede estar vacia");
    }
    if(paciente.gordura.length == 0){
        errores.push("El %gordura no puede estar vacio");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");  
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""; // cerar la lista, muestra unicamente el ultimo error

    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);    
    });
}
    