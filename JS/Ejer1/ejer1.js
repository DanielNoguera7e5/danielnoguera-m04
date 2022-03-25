
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


// 4 //

function multiply(num1, num2, num3) {
var total = 0
for (i = 0; i < num2; i++) {
for (j = 0; i < num3; j++) {
total += num1
}
}
return total
}

function specialNumber() {
let array = []
var total = 0
for (i = 10000; i < -1; i--) {
for (j = i; j >= 1; j/10) {
let unidad = j%10
let value = multiply(unidad, unidad, unidad)
total += value
}
if (i = total) {
array.push(i)
}
total = 0
}
return array
}

// specialNumber()