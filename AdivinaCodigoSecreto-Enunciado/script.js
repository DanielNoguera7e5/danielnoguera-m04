const codigo = [];
const maxIntento = 8;
var intento = 0;
var gameFinished = false;

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
    if (gameFinished != true && intento < maxIntento) {
        console.log(intento);
        console.log(maxIntento);
        document.getElementById("numero").focus();
        if (validInput()) {
            info();
            game();
        }
    }
}

function game() {
    if (intento == 0) {
        primerIntento();
    }
    generarFila();
    intento++;
    info(intento, maxIntento);
    userWon = didUserWin(userInput())
}

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

function primerIntento() {
    let firstRow = document.getElementById("firstRow");
    firstRow.remove();
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

        colorRow(div3, userInput(), i);
    }
}


function info(intento, maxIntento) {
    let info = document.getElementById("info");
    switch(intento) {
        case 1: 
            info.textContent = "Segundo intento"; break;
        case 2: 
            info.textContent = "Tercer intento"; break;
        case 3: 
            info.textContent = "Cuarto intento"; break;
        case 4: 
            info.textContent = "Quinto intento"; break;
        case 5: 
            info.textContent = "Sexto intento"; break;
        case 6: 
            info.textContent = "Séptimo intento"; break;
        case 7: 
            info.textContent = "Último intento"; break;
        case maxIntento:
            info.textContent = "Perdiste... Recarga la página para intentarlo de nuevo."; break;
    }
}


function colorRow(box, userInput, i) {
    if (codigo[i] == userInput[i]) {
        box.style.background = "green";

    } else if (codigo.includes((userInput[i]))) {
        box.style.background = "yellow";
    
    } else {
        box.style.background = "#BABABA";
    }
}

function didUserWin(userInput) {
    for(let i = 0; i < 5; i++) {
        if (codigo[i] != userInput[i]) {
            return false;
        }
    }
    document.getElementById("info").textContent = "HAS ACERTADO LOS 5 NUMEROS"
    return true;
}

codigoSecreto();
