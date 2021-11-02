
const func1 = () => {
    let soma1 = 1
    return soma1;
}
console.log(func1());

const func2 = () => {
    let soma2 = 2
    return soma2;
}
console.log(func2());

const func3 = () => {
    let total;
    total = func1() + func2()
    return total;
}
console.log(func3());
