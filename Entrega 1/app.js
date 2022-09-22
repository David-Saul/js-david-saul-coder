
const productos = [
    {id: 1, nombre:"Colombia", precio: 21000},
    {id: 2, nombre:"Brasil", precio: 18000},
    {id: 3, nombre:"Peru", precio: 17000},
    {id: 4, nombre:"Guatemala", precio: 25000},
    {id: 5, nombre:"Jamaica", precio: 35000},
    {id: 6, nombre:"Nicaragua", precio: 29000},
];
let carrito = [];

let seleccion = prompt ("Hola, ¿Desea adquirir algún producto?");

while (seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingresá si o no")
    seleccion = prompt("Hola, ¿Desea adquirir algún producto?");
}
if (seleccion == "si"){
    alert ("A continuación le mostraremos la lista de productos");
    let todoslosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio + "x KG");
    alert (todoslosProductos.join(" * "));
} else if (seleccion == "no"){
    alert("Gracias por confiar en nosotros, ¡te esperamos la próxima!");
}
while (seleccion != "no"){
    let producto = prompt ("Elegí tu café favorito");
    let precio = 0;
    if (producto == "Colombia" 
    || producto == "Brasil" 
    || producto == "Peru" 
    || producto == "Guatemala" 
    || producto == "Jamaica"
    || producto == "Nicaragua"){
    switch (producto){
        case "Colombia":
            precio = 21000;
            break;
        case "Brasil":
            precio = 18000;
            break;
        case "Peru":
            precio = 17000;
            break;
        case "Guatemala":
            precio = 25000;
            break;
        case "Jamaica":
            precio = 35000;
            break;
        case "Nicaragua":
            precio = 29000;
            break;
        default:
            break;
    }
    let unidades = parseInt (prompt ("Ingrese la cantidad de unidades"))

    carrito.push({producto, unidades, precio});

    seleccion = prompt ("¿Desea seguir comprando?");

    while (seleccion === "no"){
        alert ("Gracias por su compra, ¡lo esperamos pronto!")
        carrito.forEach(carritoFinal =>{
            alert(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, 
            Precio: $ ${carritoFinal.precio}, 
            Total a pagar por producto: $ ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
        }
    }
}