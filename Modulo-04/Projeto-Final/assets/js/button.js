export const clickButton = (button, span, input) => {
    button.addEventListener('click', () => {
    
    if (input.checked == true) {
        span.style.left = '2px';
        span.style.right = '20px';
        button.style.backgroundColor = '#e5cf8c';
    } else {
        span.style.right = '2px';
        span.style.left = '20px';
        button.style.backgroundColor = '#1190cd';
    }
})}