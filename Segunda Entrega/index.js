/* Traigo elementos del DOM */
let div = document.getElementById("contenedor");
let boton = document.getElementById("boton");
let buscador = document.getElementById("buscador");
let botonInput = document.getElementById("botonInput");
let formulario = document.getElementById("formulario");

/* Array de mis productos */

let productos = [
    {id: 1, nombre: "Colombia" , precio: 3250, imagen:"https://cafesmoreno.com/wp-content/uploads/2020/12/bolsa-colombia-pico-cristobal-uai-1269x1693.jpg"},
    {id: 2, nombre: "Costa Rica" , precio: 2950, imagen:"https://cafesmoreno.com/wp-content/uploads/2020/12/bolsa-costarica-tarrazu.jpg"},
    {id: 3, nombre: "Brasil" , precio: 2750, imagen:"https://cafesmoreno.com/wp-content/uploads/2021/04/Bolsa-brasil-fazenda-bella-vista-uai-1269x1693.jpg"},
    {id: 4, nombre: "Guatemala" , precio: 3150, imagen:"https://cafesmoreno.com/wp-content/uploads/2020/12/bolsa-guatemala-volcan-oro-1-uai-1269x1693.jpg"},
];
/* Creo carrito y funciones para compra */

let carrito = [];
let emails = [];

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
});

let comprarProducto = (producto) => {
    let cafeExiste = carrito.find(item => item.id === producto.id);
    if(cafeExiste !== undefined){
        cafeExiste.precio = cafeExiste.precio + producto.precio;
        cafeExiste.cantidad = cafeExiste.cantidad + 1;
    }else{
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1,
        })
    }
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


