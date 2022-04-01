// 1 //

function todaysDate() {
    let date = new Date();
    return date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear();
}

console.log(todaysDate())

// 2 //

function iAmInM04() {
    let date = new Date();
    if (date.getDay == 3 || date.getDay == 4) {
        
    }
}