function insertarFila() {
    let table = document.getElementById("Taula");
    let firstRow = table.insertRow(0);
    let cell1 = firstRow.insertCell(0);
    let cell2 = firstRow.insertCell(1);
    cell1.innerHTML = "fila 1 cel·la 1";
    cell2.innerHTML = "fila 1 cel·la 2";
}

function insertarFilaFinal() {
    let table = document.getElementById("Taula");
    let lastRow = table.insertRow(table.length);
    let rowNumber = table.rows.length;
    var cell1 = lastRow.insertCell(0);
    var cell2 = lastRow.insertCell(1);
    cell1.innerHTML = `fila ${rowNumber} cel·la 1`;
    cell2.innerHTML = `fila ${rowNumber} cel·la 2`;
}