var mudarTexto = document.querySelector(".mudar");
mudarTexto.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var alturaEhValida = true;
  var pesoEhValido = true;

  if(altura <= 0 || altura >= 3 || peso <= 0 || peso >= 1000)  {
      alturaEhValido = false;
      pesoEhValido = false;
      paciente.classList.add("paciente-invalido");
  }

  if(alturaEhValida && pesoEhValido) {
      var imc = peso / (altura * altura);
      tdImc.textContent = imc.toFixed(2);
  }else{
      tdImc.textContent = "Altura e/ou peso inválidos!"
  }
}

// var cor = document.querySelector(".info-nome");
// cor.style.color = "rgb(105,150,255)";
// cor.style.fontSize = "30px";
// cor.style.fontStyle = "italic";
// cor.style.fontWeight = "800"
// var tdGordura = pacientes.querySelector(".info-gordura");
// var gordura = tdGordura.textContent;