
var mudarTexto = document.querySelector(".mudar");
mudarTexto.textContent = "Aparecida Nutricionista";
mudarTexto.style.fontSize = "30px";

// Função Nomeada
mudarTexto.addEventListener("click", mostraMensagem);
function mostraMensagem() {
    console.log("Olá eu fui clicado!!!"); 
 }

// função anônima
// mudarTexto.addEventListener("click", function(){
//     console.log("Olha só posso chamar uma função anônima!");
// });


var cor = document.querySelector(".info-nome");
cor.style.color = "rgb(105,150,255)";
// cor.style.fontSize = "30px";
// cor.style.fontStyle = "italic";
// cor.style.fontWeight = "800"
