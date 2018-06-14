var mudarTexto = document.querySelector(".mudar");
mudarTexto.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdGordura = paciente.querySelector(".info-gordura");
var gordura = tdGordura.textContent;


var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);

tdImc.textContent = imc;



