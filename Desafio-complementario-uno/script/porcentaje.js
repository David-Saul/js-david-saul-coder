/* Calculadora de porcentajes */
let porc = Number(prompt("Ingrese el porcentaje a calcular"));
while (porc != 0) {
    let num = Number(prompt("Ingrese el número a operar"));
    let resultado = (porc / 100) * num;
    let mensaje = `El ${porc}% de ${num} es ${resultado}`;
    alert(mensaje);
    porc = Number(prompt("Ingrese el porcentaje a calcular"));
}
alert("Usted ha cerrado la calculadora");