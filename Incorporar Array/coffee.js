/* Lista de Café Especialidad */
const productos = [
    {id: 1, name:"Colombia", price: 21000},
    {id: 2, name:"Brasil", price: 18000},
    {id: 3, name:"Peru", price: 17000},
    {id: 4, name:"Guatemala", price: 25000},
    {id: 5, name:"Jamaica", price: 35000},
    {id: 6, name:"Nicaragua", price: 29000},
];
let origen = prompt("Ingrese el origen del café especialidad");
while (origen != "ESC") {
    let item = productos.find((cafe) => cafe.name === origen);
    let mensaje = `
    Nombre: ${item.name}
    Precio x KG: $ ${item.price}
    `;
    alert(mensaje);
    origen = prompt("Ingrese el origen del café especialidad");
    }
alert("Gracias por consultar por nuestros productos");
