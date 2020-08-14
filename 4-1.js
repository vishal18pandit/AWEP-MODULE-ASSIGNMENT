
let counter = 1;


function incre() {
    let coleconter = document.querySelector("#counterid");
    counter = counter + 1;
    coleconter.innerHTML = counter;
}

function decre() {
    let coleconter = document.querySelector("#counterid");
    counter = counter - 1;
    coleconter.innerHTML = counter;
}