// Toda função retorna um valor (tipo de dado). Se o retorno não for declarado utilizado a palavra return, o valor retornado será undefined.

const ativar = document.querySelector(".ativar");


// 
function handleClick (event){
  console.log(event.mozPressure);
}

ativar.addEventListener('click',handleClick )


console.log(ativar)
