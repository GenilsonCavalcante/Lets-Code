/*
9 - 2. Retorne cada título dentro de um h1 (por ex. <h1>Tesla Model S</h1>).
*/
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const arrTitle = wishlist.map(item => `<h1>${item.title}</h1>`);
for (const getTitle of arrTitle) {
    console.log(getTitle);
}