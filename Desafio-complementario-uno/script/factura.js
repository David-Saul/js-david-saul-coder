/* Verificador de Factura AFIP según IVA */
let letraComprobante = prompt("Letra de comprobante (A, B o C)");
if (letraComprobante == "A") {
    let alicuota = Number(prompt("Ingrese la alicuota IVA de su factura"));
    if (alicuota === 21) {
        alert("Su factura es por compraventa de bienes y servicios (excepto bienes de uso)");
    }else if (alicuota === 10.5) {
        alert("Su factura es por inversiones en bienes de uso");
    } else if (alicuota === 27){
        alert("Su factura es por prestaciones de servicio");
    }
}else if (letraComprobante == "B"){
    alert("No puede tomar el IVA de esta factura para crédito fiscal");
}else if (letraComprobante == "C") {
    alert("Su factura es consumidor final de monotributista");
}else {
    alert("Su comprobante no es válido");
}
prompt("Presione F5 para ingresar otro comprobante");
