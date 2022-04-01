// 1 //

function printEstudiante(estudiante) {
    var result = ``
    for (let i in estudiante) {
        if (estudiante.hasOwnProperty(i)) {
            result += `${i} = ${estudiante[i]}\n`;
        }
    }
    return result
}

function eliminarPropiedad(estudiante) {
    delete estudiante.edad;
}

function añadirPropiedades(estudiante) {
    estudiante.fecha_nacimiento = new Date(2003, 09, 10);
    estudiante.apellidos = "Noguera";
}

// function fechaCorrecta(estudiante) {
//
//}

function calculaEdad(estudiante) {
    let nacimiento = estudiante.fecha_nacimiento;
    let hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
}


function main() {
    let estudiante = {
        nombre: "Daniel", curso: "DAMR", edad: 19
    };
    console.log(printEstudiante(estudiante));
    eliminarPropiedad(estudiante);
    console.log(printEstudiante(estudiante));
    añadirPropiedades(estudiante);
    console.log(printEstudiante(estudiante));
    console.log(calculaEdad(estudiante));
}
main();

// 2 //

function mismasPropiedades(estudiante1, estudiante2) {
    
}
