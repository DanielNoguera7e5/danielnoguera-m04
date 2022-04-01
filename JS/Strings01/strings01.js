// 1 //

function stringContainsAs(string) {
    if (string.substring(0.2) == "As") {
        return string;
    } else {
        return "As".concat(string);
    }
}

// console.log(stringContainsAs("hola"));

// 2 //

function askStringAndNumber() {
    let string = prompt("Entra una paraula");
    let number = prompt("Entra un numero");
    return (substractChar(string, number));
}

function substractChar(string, number) {
    if (number < string.length) {
        return string.replace(string[number],"");
    } else {
        return "el numero ha de ser mes petit que la longitut de la paraula";
    }
}

// console.log(askStringAndNumber())

// 3 //

function replaceFirstAndLast(string) {
    if (string.length > 0) {
        let first = string.charAt(0)
        let last = string.charAt(string.length - 1);
        let stringWithoutLastAndFirst = string.slice(1,-1);
        return last.concat(stringWithoutLastAndFirst, first);
    }
}

console.log(replaceFirstAndLast("holaquepasa"));