const codigo = [];
const maxIntento = 8;
var intento = 0;

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
}

function userInput() {
    let input = document.getElementById("numero").value;
    let arrayInput = Array.from(String(input), Number);
    return arrayInput;
}

function inputSonNums() {
    let esNum = true;
    for (let num of userInput()) {
        if (isNaN(num)) { //isNaN retorna fals si el valor és un nombre
            esNum = false;
        }
    }
    return esNum;
}

function Comprobar() {
    document.getElementById("numero").focus();
    validInput();
    info();
    generarFila();
    
}

function validInput() {
    if (userInput().length == 5 && inputSonNums()) {
        return true;
    } else {
        return false;
    }
}

function generarFila() {
    let nuevaFila = document.createElement("div");
    nuevaFila.classList.add("rowResult w100 flex wrap");
    document.getElementById("Result").appendChild(nuevaFila);

    for(let i = 0; i < 5; i++) {
        
        let div1 = document.createElement("div");
        div1.classList.add("w20");
        
        
    }
}



function info() {

}


function main() {
    codigoSecreto();
}

main()