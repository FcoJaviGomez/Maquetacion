let tienda = document.getElementById("tienda")

let tipo = document.getElementById("tipo")
let precioTotal = document.getElementById("precioTotal")
let precio = document.getElementById("precio")

let productos = document.getElementById("productos")

let boton1 = document.getElementById("prenda1")
let boton2 = document.getElementById("prenda2")
let boton3 = document.getElementById("prenda3")
let boton4 = document.getElementById("prenda4")
let boton5 = document.getElementById("prenda5")
let boton6 = document.getElementById("prenda6")




let arrayPrendas = []
let arrayCarrito = []

class Prendas {
    constructor(imagen, tipo, precio) {
        this.imagen = imagen;
        this.tipo = tipo;
        this.precio = precio;
    }
}


let prenda1 = new Prendas("https://static.bershka.net/4/photos2/2022/V/0/2/p/8404/647/800//01/8404647800_2_4_3.jpg?t=1631711101953", "Chaleco", 20)
let prenda2 = new Prendas("https://static.bershka.net/4/photos2/2022/V/0/2/p/2234/498/503/2234498503_2_4_6.jpg?t=1644418936880", "Sudadera", 15)
let prenda3 = new Prendas("Pantalon", 25)
let prenda4 = new Prendas("Chaleco", 20)
let prenda5 = new Prendas("Sudadera", 15)
let prenda6 = new Prendas("Pantalon", 25)

arrayPrendas.push(prenda1)
arrayPrendas.push(prenda2)
arrayPrendas.push(prenda3)
arrayPrendas.push(prenda4)
arrayPrendas.push(prenda5)
arrayPrendas.push(prenda6)
arrayPrendas.push(prenda6)






function tiendaMostrar() {
    let contenidoProductos = ""

    let suma = 0

    if (arrayCarrito.length == 0) {
        contenidoProductos = `<div class="alert alert-dark" role="alert">
    No hay prendas en el carrito
  </div>`
    }
    else {
        for (let i = 0; i < arrayCarrito.length; i++) {
            suma += arrayCarrito[i].precio
            contenidoProductos += `<li class="list-group-item d-flex justify-content-between align-items-center">
        ${arrayCarrito[i].tipo}
            <span class="badge bg-primary rounded-pill">${arrayCarrito[i].precio} €</span>
        </li>`

        }

        contenidoProductos += `<div>Precio Total ${suma}€</div>`
    }
    productos.innerHTML = contenidoProductos

}


function anadirPrendas(pos) {

    arrayCarrito.push(arrayPrendas[pos])
    console.log(arrayCarrito)


    // for (let i = 0; i < arrayCarrito.length; i++) {
    //     precioTotal.innerHTML =

    //         

    // `<tr>
    //                 <td>${arrayCarrito[i].tipo}</td>
    //                 <td>${arrayCarrito[i].precio}</td>

    //               </tr>`

    // }
}


function carga() {

    let contenedor = document.getElementById("tarjetas")


    for (i = 0; i < arrayPrendas.length; i++) {

        contenedor.innerHTML += ` <div class="col-4">
    <div class="card" style="width: 18rem;">
        <img src="${arrayPrendas[i].imagen}"
            class="card-img-top">
        <div class="card-body text-center">

            <h5 class="card-title" id="tipo" value="Chaleco">${arrayPrendas[i].tipo}</h5>
            <h5 id="precio">${arrayPrendas[i].precio}</h5>

            <button onclick="anadirPrendas(${i})" class="btn btn-primary" id="prenda1">Añadir</button>
        </div>
    </div>
    </div>`

    }


}



