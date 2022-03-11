function generateCs () {
    let cs = [];
    for (i = 0; i < 5; i++) {
    cs.push(Math.floor((Math.random() * 10) + 1));
    }
    return cs;
}

function numberInCs(cs, userNumber) {;
    for (i = 0, j = 0; i < 5; i++) {
        if (userNumber == cs[i]) {
            j++;
        }
    }
    return j;
}

function numberInPosition(cs) { 
    let userNumberList = [];
    let resultList = [];

    for(h = 0; h < 5; h++) {
        let userNumber = prompt("Inserta 5 numeros del 1 al 10");
        userNumberList.push(userNumber);

        if (userNumber == cs[h]) {
            resultList.push("OK");
        } else {
            resultList.push(numberInCs(cs, userNumber));
        }         
    }
    console.log(userNumberList);
    return resultList;
}

function howManyTries(cs) {
    let result = numberInPosition(cs);
    for (k = 0; k < 4; k++) {
        if (result == ["OK", "OK", "OK", "OK", "OK"]) {
            return console.log("Has guanyat!");
        } else {
            return numberInPosition(cs);
        }
    }
    //bucle mal hecho
}


function main () {
    cs = generateCs();
    console.log(cs);
    howManyTries(cs);
}

main();