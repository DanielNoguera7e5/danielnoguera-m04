function obtenirAtributs() {
    let a = document.getElementById("itb").attributes;
    for (let i = 0; i < a.length; i++) {
        console.log(a[i].value)
    }
}