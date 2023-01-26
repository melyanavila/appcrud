let listaCitas = [];

const objCita = {
    id: '',
    asunto: '',
    lugar: '',
    hora: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const asuntoInput = document.querySelector('#asunto');
const lugarInput = document.querySelector('#lugar');
const horaInput = document.querySelector('#hora');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(asuntoInput.value === '' || lugarInput.value === '' || horaInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    if(editando) {
        editarCita();
        editando = false;
    } else {
        objCita.id = Date.now();
        objCita.asunto = asuntoInput.value;
        objCita.lugar = lugarInput.value;
        objCita.hora = horaInput.value;

        agregarCita();
    }
}

function agregarCita() {

    listaCitas.push({...objCita});

    mostrarCitas();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objCita.id = '';
    objCita.asunto = '';
    objCita.lugar = '';
    objCita.hora = '';
}

function mostrarCitas() {
    limpiarHTML();

    const divCitas = document.querySelector('.div-citas');

    listaCitas.forEach(cita => {
        const {id, asunto, lugar, hora} = cita;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${asunto} - ${lugar} - ${hora} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarCita(cita);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divCitas.appendChild(parrafo);
        divCitas.appendChild(hr);
    });
}

function cargarCita(cita) {
    const {id, asunto, lugar, hora} = cita;

    asuntoInput.value = asunto;
    lugarInput.value = lugar;
    horaInput.value = hora;

    objCita.id = id

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarCita() {

    objCita.asunto = asuntoInput.value;
    objCita.lugar = lugarInput.value;
    objCita.hora = horaInput.value;

    listaCitas.map(cita => {

        if(cita.id === objCita.id) {
            cita.id = objCita.id;
            cita.asunto = objCita.asunto;
            cita.lugar = objCita.lugar;
            cita.hora = objCita.hora;
        }

    });

    limpiarHTML();
    mostrarCitas();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;
}

function eliminarCita(id) {

    listaCitas = listaCitas.filter(cita => cita.id !== id);

    limpiarHTML();
    mostrarCitas();
}

function limpiarHTML() {
    const divCitas = document.querySelector('.div-citas');
    while(divCitas.firstChild) {
        divCitas.removeChild(divCitas.firstChild);
    }
}

/* let listaCitas = [];

const objCita = {
    asunto: '',
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

    if(nombreInput.value === '' || empresaInput.value === '' || lugarInput.value === '' || horaInput.value === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    if(editando) {
        // editarCita();
        editando = false;
    } else {
        objCita.nombre = nombreInput.value;
        objCita.empresa = empresaInput.value;
        objCita.lugar = lugarInput.value;
        objCita.hora = horaInput.value;

        agregarCita();
    }
}

function agregarCita() {
    listaCitas.push({...objCita})

    mostrarCita();
}

function mostrarCita() {
    const divCitas = document.querySelector = (".div-citas");

    listaCitas.forEach( cita => {
    const {nombre, empresa, lugar, hora} = cita;

    const parrafo = document.createElement('p');
    parrafo.textContent = `${nombre} - ${empresa} - ${lugar} -${hora}`
    divCitas.appendChild(parrafo);

    const editarBoton = document.createElement('button');
    // editarBoton.onclick = () => cargarCita(cita);
    editarBoton.textContent = 'Editar';
    editarBoton.classList.add('btn', 'btn-editar');
    parrafo.append(editarBoton);

    const eliminarBoton = document.createElement('button');
    // eliminarBoton.onclick = () => eliminarCita(cita);
    editarBoton.textContent = 'Eliminar';
    editarBoton.classList.add('btn', 'btn-eliminar');
    parrafo.append(eliminarBoton);

    const hr = document.createElement('hr');
    divCitas.appendChild(hr);
    });
} */