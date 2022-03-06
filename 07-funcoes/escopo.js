// Uma função cria o seu próprio escopo. Isso significa que variáveis declaradas dentro de uma função, não podem ser acessadas fora das mesmas. Porém, variáveis criadas fora da função, podem ser acessadas pela mesma.

const nome = 'JavaScript';

function logCurso() {
  console.log(nome);
}

// loga JavaScript
logCurso();

// _______________________________________________________________

function logLivro() {
  const livro = 'O Senhor dos Anéis';
  console.log(livro);
}

logLivro();

// _______________________________________________________________

// Erro, pois a constante livro não existe
console.log(livro);