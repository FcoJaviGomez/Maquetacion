let nombre = document.getElementById("nombre")
let origen = document.getElementById("origen")
let destino = document.getElementById("destino")
let numeroDePersonas = document.getElementById("numeroDePersonas")
let fecha = document.getElementById("fecha")
let mostrar = document.getElementById("mostrar")

let array = []
let array1 = []




function registrar() {
    let persona = {
        nombre: nombre.value,
        origen: origen.value,
        destino: destino.value,
        numeroDePersonas: numeroDePersonas.value,
        fecha: fecha.value,
    }
    array.push(persona)
    console.log(array)
}


function destinosParaProbar() {

    for (let i = 0; i < array.length; i++) {
        let personaDestino = array[i].destino.toLowerCase();
        console.log("hola");

        if ((personaDestino == "canarias") || (personaDestino == "mallorca") || (personaDestino == "galicia")) {

            array1.push(array[i])
        }

    }
    console.log(array1)

    mostrar.innerHTML = `<tr>
                            <th>Nombre</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Nº Personas</th>
                            <th>Fecha</th>
                         </tr>`

    for (let i = 0; i < array1.length; i++) {
        mostrar.innerHTML += `<tr>
                                <td>${array1[i].nombre}</td>
                                <td>${array1[i].origen}</td>
                                <td>${array1[i].destino}</td>
                                <td>${array1[i].numeroDePersonas}</td>
                                <td>${array1[i].fecha}</td>
                              </tr>`
    }
}







// for (let i = 0; i < javi.length; i++)