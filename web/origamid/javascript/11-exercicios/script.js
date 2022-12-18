const botao = document.querySelector("button")

console.log(Boolean(botao));

function somar () {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1
   if (total < 10)  {
    div.innerText = total ;
  } else {
    console.log("acabou o click meuchampson")
  }
}

if(botao) {
botao.addEventListener("click", somar)
}