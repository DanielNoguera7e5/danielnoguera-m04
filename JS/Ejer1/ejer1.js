
function numMesGran(valor1, valor2) {
    var mesGran = valor1;
    
    if (mesGran < valor2) {
        mesGran = valor2;
    }
    return mesGran
}

console.log(numMesGran(62,45));



function multiplicacio(valor1, valor2) {
    for (i = valor1; i >= valor2; i + valor1) {
        return i ;
    }
}
//i < valor2

console.log(multiplicacio(2,6));



function multiplicacioDe3(valor1, valor2, valor3) {
    return multiplicacio(valor1, valor2) * valor3;
}

console.log(multiplicacioDe3(2,3,4));
