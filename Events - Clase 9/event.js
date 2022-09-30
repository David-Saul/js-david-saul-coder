let titulo = document.getElementById("titulo");
titulo.innerHTML = "<h1>Escriba un producto de nuestra lista</h1>";

let productos = [
    {id: 1, name:"Colombia", price: 21000, img:"https://cafesmoreno.com/wp-content/uploads/2020/12/bolsa-colombia-pico-cristobal-uai-1269x1693.jpg"},
    {id: 2, name:"Brasil", price: 18000, img:"http://d2r9epyceweg5n.cloudfront.net/stores/002/134/306/products/622bcf0f-3cbd-4e8b-9f06-1096a1a1648f1-6961f69cd5f2377cdc16521989788484-640-0.jpeg"},
    {id: 3, name:"Peru", price: 17000, img:"https://www.cafeselpanameno.com/wp-content/uploads/2020/11/PERU-scaled.jpg"},
    {id: 4, name:"Guatemala", price: 25000, img:"http://d2r9epyceweg5n.cloudfront.net/stores/002/111/193/products/e200686c-bac9-477e-86e6-979ce86395531-4522671c98d33c577a16521995611940-640-0.jpeg"},
    {id: 5, name:"Jamaica", price: 95000, img:"https://m.media-amazon.com/images/I/91u55dLBcVL._SX466_.jpg"},
    {id: 6, name:"Nicaragua", price: 29000, img:"https://rouk.cl/wp-content/uploads/2021/06/RoukNicaragua500web2-1.jpg"},
];

let contenedor = document.getElementById("contenedor");

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let inputs = e.target.children;
    let producto = productos.find((item) => item.name === inputs[0].value);
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Café Especialidad: ${producto.name}</p>
    <strong>$${producto.price} x KG</strong>
    <img src="${producto.img}"/>
    `;
    contenedor.append(div);
});