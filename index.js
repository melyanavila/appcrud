//No funciona la línea 24\\

let listaCitas = [];

const objCita = {
    nombre: '',
    empresa: '',
    lugar: '',
    hora: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const empresaInput = document.querySelector('#empresa');
const lugarInput = document.querySelector('#lugar');
const horaInput = document.querySelector('#hora');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value === '' || empresaInput.value === '' ) {
        alert('Llene campo nombre y/o empresa');
        return;
    }

    if(lugarInput.value === '' || horaInput.value === '' ) {
        alert('Llene campo lugar y/o hora');
        return;
    }

    if(editando) {
        editarDatos();
        editando = false;
    } else {
        objCita.nombre = nombreInput.value;
        objCita.empresa = empresaInput.value;
        objCita.lugar = lugarInput.value;
        objCita.hora = horaInput.value;

        agregarDatos();
    }
}

function agregarDatos() {

    listaCitas.push({...objDatos});

    mostrarDatos();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objCita.nombre = '';
    objCita.empresa = '';
    objCita.lugar = '';
    objCita.hora = '';
}

function mostrarDatos() {
    limpiarHTML();

    const divDatos = document.querySelector('.div-citas');

    listaCitas.forEach(cita => {
        const {nombre, empresa,lugar,hora} = cita;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${nombre} - ${empresa} - ${lugar} - ${hora} - `;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarCita(cita);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarCita(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divCitas.appendChild(parrafo);
        divCitas.appendChild(hr);
    });
}

function cargarDatos(cita) {
    const {id, nombre, empresa, lugar, hora} = cita;

    nombreInput.value = nombre;
    empresaInput.value = empresa;
    lugarInput.value = lugar;
    horaInput.value = hora;

    objCita.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarDatos() {

    objCita.nombre = nombreInput.value;
    objCita.empresa = empresaInput.value;
    objCita.lugar = lugarInput.value;
    objCita.hora = horaInput.value;

    listaCitas.map(cita => {

        if(cita.id === objCita.id) {
            cita.id = objEmpleado.id;
            empleado.nombre = objEmpleado.nombre;
            empleado.puesto = objEmpleado.puesto;

        }

    });

    limpiarHTML();
    mostrarEmpleados();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;
}

function eliminarEmpleado(id) {

    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);

    limpiarHTML();
    mostrarEmpleados();
}

function limpiarHTML() {
    const divEmpleados = document.querySelector('.div-empleados');
    while(divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}