// 1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor. 
//2.1 - Transforme o nome para letra maiúscula: toUpperCase()
// 2.2 - Calcule o total de anos desde o lançamento do livro: 2050 - ano
// 2.3 - Crie uma variável com a frase: nome + ' por ' + autor;
// 2.4 - Coloque os 3 valores acima em um objeto.

function livro (nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2050 - ano;
  const frase = nome + '' + autor;
  const objeto = {
    nome: nomeMaior,
    totalAnos,
    frase,
  };
  return objeto;
}

const livroRetorno = livro('123123asdas',2021,'rodriguin');

console.log(livroRetorno.totalAnos)

