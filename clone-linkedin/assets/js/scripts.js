// SEARCH
let entrou = document.getElementById('input_search');

function entrar() {
    entrou.style.width = "17rem";
}
function sair() {
    document.getElementById("corpo").addEventListener("click", function() {
        entrou.style.width = "12rem";
    });
}