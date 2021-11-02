//VARIÁVEIS GLOBAIS:
let container = document.querySelector('.container');
const input = document.querySelector('input[name="testing"]');

//CRIAR UL
let ul = document.createElement('ul');
ul.classList = 'ul';//Criando classe ao elemento.
container.appendChild(ul);//Adicionando o ul para dentro do container.

const button = document.querySelector('button[type="submit"]');
button.addEventListener('click', (evt) => {
    evt.preventDefault();
    const text = input.value;

    if (text != '') {
        return creatListElements(text);
    } else {
        return;
    }
})

let cnt = 1;
const creatListElements = (text) => {

    let li = document.createElement('li')
    li.textContent = `${cnt} - ${text}`;

    ul.append(li)

    cnt++;
    input.value = '';//Resetar o text do input.
}

