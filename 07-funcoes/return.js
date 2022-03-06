// Toda função retorna um valor (tipo de dado). Se o retorno não for declarado utilizado a palavra return, o valor retornado será undefined.

function logCurso(nome) {
  console.log(nome);
  return nome + ' Log';
}

const valor = logCurso('JavaScript');
console.log(valor);

