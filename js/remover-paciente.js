var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500)
  // event.target.parentNode.remove();
});

// tabela.addEventListener("dblclick",function(event){
//   var alvoEvento = event.target;
//   var paiDoAlvo = alvoEvento.parentNode; // tr = paciente = remover
//   paiDoAlvo.remove();  
// });

// pacientes.forEach(function(paciente) {
//   paciente.addEventListener("dblclick", function(){
//    this.remove(); // this está sempre atrelado ao dono do evento
//   });
// }) ;