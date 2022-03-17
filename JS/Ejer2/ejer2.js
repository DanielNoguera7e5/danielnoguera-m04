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


function userNumbers() {
    let userNumberList = [];
    for(h = 0; h < 5; h++) {
        let userNumber = prompt("Inserta 5 numeros del 1 al 10");
        userNumberList.push(userNumber);
    }
    return userNumberList;
}

function resultList(userNumberList, cs) {
    let resultList = [];
    for(h = 0; h < 5; h++) {
        if (userNumberList[h] == cs[h]) {
            resultList.push("OK");
        } else {
            resultList.push(numberInCs(cs, userNumberList[h]));
        }         
    }
    return resultList;
}


function didYouWin(cs) {
    for (k = 0; k < 4; k++) {
        let userNums = userNumbers();
        let result = resultList(userNums, cs);

        if (result == ["OK", "OK", "OK", "OK", "OK"]) {
            alert("Has guanyat!");
            console.log("Has guanyat!");
            k==5;
        } else {
            alert("Resultat: " + result + "  Nums introduits:" + userNums);
            console.log(result);
            console.log(userNums);
        }
    }
}


function main () {
    cs = generateCs();
    console.log(cs);
    didYouWin(cs);
}

main();


//no he lograt realitzar el programa com volia