/* Simulador de cuotas para un préstamo */
let prestamo = Number(prompt("Ingrese monto a solicitar"));
let cuotas = Number(prompt("Ingrese la cantidad de cuotas"));
while(prestamo > 0){    
        if (prestamo <= 30000 && cuotas <= 3){
            let deuda = prestamo * 1.15;
            let prima = deuda / cuotas;
            let mensaje = `Su prima mensual a pagar sería de $ ${prima}`;
            alert(mensaje);
        }else if (prestamo <= 80000 && cuotas <= 9){
            let deuda = prestamo * 1.30;
            let prima = deuda / cuotas;
            let mensaje = `Su prima mensual a pagar sería de $ ${prima}`;
            alert(mensaje);
        }else if (prestamo <= 150000 && cuotas <= 12){
            let deuda = prestamo * 1.55;
            let prima = deuda / cuotas;
            let mensaje = `Su prima mensual a pagar sería de $ ${prima}`;
            alert(mensaje);
        }else if (prestamo <= 300000 && cuotas <= 18){
            let deuda = prestamo * 1.85;
            let prima = deuda / cuotas;
            let mensaje = `Su prima mensual a pagar sería de $ ${prima}`;
            alert(mensaje);
        }else {
            alert("El monto y cuota no son compatibles para solicitar un préstamo");
        }
    prestamo = Number(prompt("Ingrese monto a solicitar"));
    cuotas = Number(prompt("Ingrese la cantidad de cuotas"));
    }    

prompt("Gracias por usar nuestro simulador.");