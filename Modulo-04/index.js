//EVENTOS RELACIONADOS AO COMPONENTE: focus, blur, input, chage
/*********EVENTO FOCUS*/
// const testingInput = document.querySelector('input[name="testing"]')
// testingInput.addEventListener('focus', (evt) => {
//     console.log(evt.target.value);
// })

/*
OBS: O (evt) é um parâmetro que recebe o evento quando a função específica é acionada. O (evt.target) é o elemento HTML que está recebendo essa ação. E o (evt.target.value) pega o valor dentro desse elemento HTML.
*/

//Ainda podemos pegar o elemento com o .this, mas para que funcione, devemos trocar de uma callBack para uma function, desse jeito:

// const testingInput = document.querySelector('input[name="testing"]')
// testingInput.addEventListener('focus',function (evt) {
//     console.log(this.value)
// })
//E para pegar o valor colocar o (this.value)


/*********EVENTO BLUR*/
//quando desfocado do elemento

// const testingInput = document.querySelector('input[name="testing"]');
// testingInput.addEventListener('blur', (evt) => {
//     console.log(evt);
// });//pegando o clique de fora.


/*********EVENTO INPUT*/
// const testingInput = document.querySelector('input[name="testing"]');
// testingInput.addEventListener('input', (evt) => {
//     console.log(evt.target.value);
// });//É executado a cada momento que digita-se uma letra no teclado. Existindo um problema com isso. Pois como é executado a todo momento que digitamos algo, então, quando queremos validar uma senha/texto, devemos primeiro pegar o evento (blur), quando ele sai do elemento focado para depois validarmos.


/*********EVENTO CHANGE*/
// const testingInput = document.querySelector('input[name="testing"]');
// /*
// O evento change é um pouco semelhante ao evento blur, como já vimos, o elemento blur pega o elemento cada vez que for desfocado, o elemento change, só pega quando for desfocado e o valor for diferente, caso seja o mesmo, ele não pega. O que isso é muito vantajoso, pois não executa um evento novamente sem ter sido alterado.
// */
// testingInput.addEventListener('change', (evt) => {
//     console.log(evt.target.value);
// })



//EVENTOS RELACIONADOS AO TECLADO: keydown, keypress, keyup.
/*********EVENTO KEYDOWN*/
// document.addEventListener('keydown', (evt) => {
//     console.log(evt);
// })//Enquanto a tecla estiver apertada para baixo. Pode ser disparado para sempre se ficar segurando a tecla.

/*********EVENTO KEYUP*/
// document.addEventListener('keyup', (evt) => {
//     console.log(evt);
// })//Quando a tecla sobe para cima.

/*********EVENTO KEYPRESS*/
// document.addEventListener('keypress', (evt) => {
//     console.log(evt);
// })//Muito semelhante ao keydown, enquanto segura. Pesquisar diferença dos dois.


//EVENTOS RELACIONADOS AO CLICK: click.
// const button = document.querySelector('button');
// button.addEventListener('click', (evt) => {
//     evt.stopPropagation();
//     evt.preventDefault();
//     console.log(evt);
// })//OBS: Como esse evento está sendo aplicado no button dentro de um form, a função padrão será de subir a página e logo carregará, pegando o elemento com o addEventListener, mas só que sumindo rapidamente. Para resolver isso podemos colocar um (type=button) dentro da tag button. Ou pode ser anulando esse evento de submit padrão de um button, através do preventDefault();

// const div = document.querySelector('.container');
// div.addEventListener('click', () => {
//     console.log('Cliquei na DIV');
// })
// /*
// OBS: EXISTE UMA SITUAÇÃO DE EVENTOS, EM QUE QUANDO UM ELEMENTO FILHO TEM UM EVENTO E O SEU ELEMENTO PAI POSSUI O MESMO EVENTO, O EVENTO QUE ACONTECEU NO FILHO TAMBÉM IRÁ OCORRER NO PAI, ISSO É CHAMADO DE PROPAGATION, E PARA QUE POSSAMOS FAZER COM QUE O EVENTO NÃO SE PROPAGUE/SUBA PARA O PAI, DEVEMOS ANULAR ESSE EFEITO DE PROPAGAÇÃO NO ELEMENTO FILHO, COMO O .stopPropagation()
// */


//EVENTOS RELACIONADOS AO FORM
const form = document.querySelector('form')
form.addEventListener('submit', (evt) => {
    evt.preventDefault();//Prevenindo o evento submit default
    console.log(evt);
})