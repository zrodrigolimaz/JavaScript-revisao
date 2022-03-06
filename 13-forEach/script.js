// FOREACH Arrays e objetos que se parecem com Array's, possuem o método forEach. Esse método recebe uma função que é executada para cada item da Array.

const lista = ['JavaScript', 'HTML', 'CSS'];

function logarItems(item, index) {
  console.log(item, 'no index:', index);
}

lista.forEach(logarItems);

// você pode escrever a função no argumento:
lista.forEach(function (item, index) {
  console.log(item, 'no index:', index);
});
