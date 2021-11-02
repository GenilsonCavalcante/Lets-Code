// SEARCH
let corpo = document.getElementById('corpo');
let conteudo = document.getElementById('conteudo');

function entrar() {
    conteudo.style.opacity = '0.4';
}
function sair() {
    document.getElementById("corpo").addEventListener("click", function() {
        conteudo.style.opacity = '1';
    });
}