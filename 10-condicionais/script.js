if (true) {
  console.log('Código executado');
}

if (false) {
  console.log('Não executado');
}

///// if else. Se a condição do if for falsa, o else que seguir será executado
if (false) {
  console.log('Não executado');
} else {
  console.log('Código executado');
}

// true/false Os valores de true/false são tipos de dados booleanos. Qualquer expressão pode ser transformada em um valor booleano. Quando passamos um valor nos parênteses após o if é como se usássemos a função Boolean() nele.

const elemento = document.querySelector('body');
const elementoNaoExiste = document.querySelector('article');
console.log(Boolean(elemento));
console.log(Boolean(elementoNaoExiste));

const texto = 'JavaScript';
const textoVazio = '';
console.log(Boolean(texto));
console.log(Boolean(textoVazio));

const numero = 20;
const numeroZero = 0;
console.log(Boolean(numero));
console.log(Boolean(numeroZero));

console.log(Boolean(undefined));
console.log(Boolean(null));

console.log("Operadores logicos")
// Operadores Lógicos
// Todas precisam ser verdadeiras  ::OU::
if (true && false) {
  console.log('Não executa');
}

// Pelo menos uma precisa ser verdadeira ::E::
if (true || false) {
  console.log('Executa');
}

