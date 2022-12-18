const lista1 = ['JavaScript', 'HTML', 'CSS'];

console.log(lista1);

const js = lista1[0];
const html = lista1[1];
const css = lista1[2];


const lista = ['JavaScript', 'HTML', 'CSS'];
const body = document.querySelector('body');

for (let index = 0; index < lista.length; index++) {
  const item = lista[index];
  body.innerHTML += '<li>' + lista[index] + '</li>';
}