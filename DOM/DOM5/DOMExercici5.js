function insertarFila() {
    let table = document.getElementById("Taula");
    let firstRow = table.insertRow(0);
    let cell1 = firstRow.insertCell(0);
    let cell2 = firstRow.insertCell(1);
    cell1.innerHTML = "nova cel·la";
    cell2.innerHTML = "nova cel·la";
}

function insertarFilaFinal() {
    let table = document.getElementById("Taula");
    let lastRow = table.insertRow(table.length);
    var cell1 = lastRow.insertCell(0);
    var cell2 = lastRow.insertCell(1);
    cell1.innerHTML = "nova cel·la";
    cell2.innerHTML = "nova cel·la";
}