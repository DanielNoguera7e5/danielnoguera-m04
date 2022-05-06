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
    info();
    if (validInput()) {
        if (intento == 0) {
            primerIntento();
        } else {
            generarFila();
        }
        intento++
    }
}
// ERROR CON PRIMER INTENTO Y QUITAR LA PRIMERA FILA


function validInput() {
    if (userInput().length == 5 && inputSonNums()) {
        return true;
    } else {
        return false;
    }
}

function iterarUserInput(i) {
    let input = userInput()
    return input[i];
}

function primerIntento(intento) {
    document.getElementById("Result").firstChild.remove
}


function generarFila() {

    let div1 = document.createElement("div");
    div1.classList.add("rowResult", "w100", "flex", "wrap");
    section = document.getElementById("Result")
    section.appendChild(div1);

    for(let i = 0; i < 5; i++) {
        
        let div2 = document.createElement("div");
        div2.classList.add("w20");
        div1.appendChild(div2);

        let div3 = document.createElement("div");
        div3.classList.add("celResult", "flex");
        div3.textContent = iterarUserInput(i);
        div2.appendChild(div3);
    }
}



function info() {

}


function main() {
    codigoSecreto();
}

main();