import { addItemToList } from './html-helpers.js';

export const handleClick = (targetClick, input) => {
    const list = document.querySelector('ol');
    targetClick.addEventListener('click', () => {
        const value = input.value;
        if (value.trim()) {//O (trim()) serve para limpar os espaços no começo.
            addItemToList(list, value);
            input.value = '';
        }
    })
}