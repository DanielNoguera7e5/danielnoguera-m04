
function tableSize(rows, cells) {
    for (let row = 0; row < rows; row++) {
        let insertRow = document.getElementById("table").insertRow(0);
        for (let cell = 0; cell < cells; cell++) {
            insertRow.innerHTML = `Fila ${row} cel·la ${cell}`;
        };
    };
};

function main() {
    tableSize(prompt(("Hoy many rows"), prompt("how many cells")));
}