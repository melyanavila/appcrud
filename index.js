//Evento para crea un nuevo libro\\
document.getElementById("formulario").addEventListener("submit",crear);

//Función crear\\
function crear (e){
    titulo = document.getElementById("titulo").value
    descripcion = document.getElementById("descripcion").value
    precio = document.getElementById("precio").value

    let libro ={
        titulo,
        descripcion,
        precio
    }
    
    if (localStorage.getItem("Libros") === null){
        let libros = []
        libros.push(libro)
        localStorage.setItem("Libros", JSON.stringify(libros))
    }
    else{
        let libros = JSON.parse(localStorage.getItem("Libros"))
        libros.push(libro)
        localStorage.setItem("Libros", JSON.stringify(libros))
    }

    leer();
    document.getElementById("formulario").reset();
    console.log("Libro guardado correctamente")
    Event.preventDefault()
}

//Crear función Leer\\
function leer (){
    let libros =JSON.parse(localStorage.getItem("Libros"));
    document.getElementById("tbody").innerHTML = ""
    for (let i=0; i < libros.length; i++){
        let titulo = libros[i].titulo
        let descripcion = libros[i].descripcion
        let precio = libros[i].precio

        document.getElementById("tbody").innerHTML +=
        `<tr>
            <td>${titulo}</td>
            <td>${descripcion}</td>
            <td>${precio}</td>
        <tr>
        `
    }
}

leer();

