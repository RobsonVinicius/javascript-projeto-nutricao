

var botaoAdicionar = document.querySelector("#adicionar-paciente");
// Prevenir comportamento padrão
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");  
  // Adquirindo informações do paciente do form
  var paciente = adquiriPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);    

  if(erros.length > 0) {
    exibeMensagensDeErro(erros);      
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset(); // limpar o form
  // limpar o erro após inserir corretamente
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});   

function adicionaPacienteNaTabela(paciente) {

  // criando a tr e a td do paciente
  var pacienteTr = criaTr(paciente);

  // Adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro) { // forEach 
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}


  // Função adquirir informações do paciente do form
  function adquiriPacienteDoFormulario(form) {
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)    
    }
    return paciente   
  }



  // Função responsável por montar a tr (linha com os dados do paciente)
  function criaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc,"info-imc"));

    return pacienteTr;
  }

  function criaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
  }

  function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
      erros.push("O nome não pode ser em branco");
    }

    // Se o if é simples podemos declarar da maneira abaixo
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");    

    if(!validaAltura(paciente.altura)) {
      erros.push("Altura é inválida");
    } 

    if(paciente.gordura.length == 0) {
      erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0) {
      erros.push("O peso não pode ser em branco");
    }
    
    if(paciente.altura.length == 0) {
      erros.push("A altura não pode ser em branco");
    }

    return erros;
  }

