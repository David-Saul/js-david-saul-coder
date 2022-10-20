/* Traigo elementos del DOM */
let div = document.getElementById("contenedor");
let boton = document.getElementById("boton");
let buscador = document.getElementById("buscador");
let botonInput = document.getElementById("botonInput");
let formulario = document.getElementById("formulario");

/* Alert de bienvenida */
Swal.fire({
    title: 'Hola!',
    text: 'Bienvenid@ a nuestra tienda de café!',
    imageUrl: 'http://todocafe.es/wp-content/uploads/2020/10/cafe_espresso_expreso-1024x597.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Taza de espresso',
});





/* Creo carrito y funciones para compra */

let carrito = [];
let emails = [];

fetch("./productos.json")
.then(response => response.json())
.then(productos => {
    productos.forEach(producto => {
        let productoRender = document.createElement("div");
        productoRender.innerHTML = `
        <h2>Café Especialidad: ${producto.nombre}</h2>
        <strong>Precio: $ ${producto.precio} x 250 gramos</strong>
        <img class="img" src="${producto.imagen}">
        <button class ="btn" id=${producto.id}>Agregar a Carrito</button>
        `;
        contenedor.append(productoRender);
        const boton = document.getElementById(producto.id);
        boton.addEventListener("click", () => comprarProducto(producto))
    })
});

let comprarProducto = (producto) => {
    let cafeExiste = carrito.find(item => item.id === producto.id);
    if(cafeExiste !== undefined){
        cafeExiste.precio = cafeExiste.precio + producto.precio;
        cafeExiste.cantidad = cafeExiste.cantidad ++; /* Uso del sumador */
    }else{
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1,
        })
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    Swal.fire({
        title: "Añadido al carrito",
        icon: "success", 
    })
}

const buscarProducto = (s) => {
    console.log(s);
    let productoBuscado = productos.find(producto => producto.nombre.includes(s));
    console.log(productoBuscado);
    buscador.value = ``
}
const guardarEmail = (e) => {
    e.preventDefault();
    let direccion = e.target.children[0].value;
    let mensaje = e.target.children[1].value;
    emails.push({
        direccion: direccion,
        mensaje: mensaje,
    })
    console.log(emails);
}

formulario.addEventListener("submit", (e) => guardarEmail(e));

boton.addEventListener("click", () => console.log(carrito));

botonInput.addEventListener("click", () => buscarProducto(buscador.value));


