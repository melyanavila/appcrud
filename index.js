//Evento para crea una cita\\
document.getElementById("formulario").addEventListener("submit",crear);

//Función crear\\
function crear (e){
    nombre = document.getElementById("nombre").value
    empresa = document.getElementById("empresa").value
    lugar = document.getElementById("lugar").value
    hora = document.getElementById("hora").value


    let cita ={
        nombre,
        empresa,
        lugar,
        hora
    }
    
    if (localStorage.getItem("Citas") === null){
        let citas = []
        citas.push(cita)
        localStorage.setItem("Citas", JSON.stringify(citas))
    }
    else{
        let citas = JSON.parse(localStorage.getItem("Citas"))
        citas.push(cita)
        localStorage.setItem("Citas", JSON.stringify(citas))
    }

    leer();
    document.getElementById("formulario").reset();
    console.log("Cita guardada correctamente")
    Event.preventDefault()
}

//Crear función Leer\\
function leer (){
    let citas =JSON.parse(localStorage.getItem("Citas"));
    document.getElementById("tbody").innerHTML = ""
    for (let i=0; i < citas.length; i++){
        let nombre = citas[i].nombre
        let empresa = citas[i].empresa
        let lugar = citas[i].lugar
        let hora = citas[i].hora

        document.getElementById("tbody").innerHTML +=
        `<tr>
            <td>${nombre}</td>
            <td>${empresa}</td>
            <td>${lugar}</td>
            <td>${hora}</td>
        <tr>
        `
    }
}

leer();


// /* let listaCitas = [];

// const objCita = {
//     nombre: '',
//     empresa: '',
//     lugar: '',
//     hora: ''
// }

// let editando = false;

// const formulario = document.querySelector('#formulario');
// const nombreInput = document.querySelector('#nombre');
// const empresaInput = document.querySelector('#empresa');
// const lugarInput = document.querySelector('#lugar');
// const horaInput = document.querySelector('#hora');
// const btnAgregarInput = document.querySelector('#btnAgregar');

// formulario.addEventListener('submit', validarFormulario);

// function validarFormulario(e) {
//     e.preventDefault();

//     if(nombreInput.value === '' || empresaInput.value === '' ) {
//         alert('Llene campo nombre y/o empresa');
//         return;
//     }

//     if(lugarInput.value === '' || horaInput.value === '' ) {
//         alert('Llene campo lugar y/o hora');
//         return;
//     }

//     if(editando) {
//         editarDatos();
//         editando = false;
//     } else {
//         objCita.nombre = nombreInput.value;
//         objCita.empresa = empresaInput.value;
//         objCita.lugar = lugarInput.value;
//         objCita.hora = horaInput.value;

//         agregarDatos();
//     }
// }

// function agregarDatos() {

//     listaCitas.push({...objDatos});

//     mostrarDatos();

//     formulario.reset();
//     limpiarObjeto();
// }

// function limpiarObjeto() {
//     objCita.nombre = '';
//     objCita.empresa = '';
//     objCita.lugar = '';
//     objCita.hora = '';
// }

// function mostrarDatos() {
//     limpiarHTML();

//     const divDatos = document.querySelector('.div-citas');

//     listaCitas.forEach(cita => {
//         const {nombre, empresa,lugar,hora} = cita;

//         const parrafo = document.createElement('p');
//         parrafo.textContent = `${nombre} - ${empresa} - ${lugar} - ${hora} - `;

//         const editarBoton = document.createElement('button');
//         editarBoton.onclick = () => cargarCita(cita);
//         editarBoton.textContent = 'Editar';
//         editarBoton.classList.add('btn', 'btn-editar');
//         parrafo.append(editarBoton);

//         const eliminarBoton = document.createElement('button');
//         eliminarBoton.onclick = () => eliminarCita(id);
//         eliminarBoton.textContent = 'Eliminar';
//         eliminarBoton.classList.add('btn', 'btn-eliminar');
//         parrafo.append(eliminarBoton);

//         const hr = document.createElement('hr');

//         divCitas.appendChild(parrafo);
//         divCitas.appendChild(hr);
//     });
// }

// function cargarDatos(cita) {
//     const {id, nombre, empresa, lugar, hora} = cita;

//     nombreInput.value = nombre;
//     empresaInput.value = empresa;
//     lugarInput.value = lugar;
//     horaInput.value = hora;

//     objCita.id = id;

//     formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

//     editando = true;
// }

// function editarDatos() {

//     objCita.nombre = nombreInput.value;
//     objCita.empresa = empresaInput.value;
//     objCita.lugar = lugarInput.value;
//     objCita.hora = horaInput.value;

//     listaCitas.map(cita => {

//         if(cita.id === objCita.id) {
//             cita.id = objEmpleado.id;
//             empleado.nombre = objEmpleado.nombre;
//             empleado.puesto = objEmpleado.puesto;

//         }

//     });

//     limpiarHTML();
//     mostrarEmpleados();
//     formulario.reset();

//     formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

//     editando = false;
// }

// function eliminarEmpleado(id) {

//     listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);

//     limpiarHTML();
//     mostrarEmpleados();
// }

// function limpiarHTML() {
//     const divEmpleados = document.querySelector('.div-empleados');
//     while(divEmpleados.firstChild) {
//         divEmpleados.removeChild(divEmpleados.firstChild);
//     }
// } */