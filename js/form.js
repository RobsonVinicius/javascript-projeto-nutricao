

var botaoAdicionar = document.querySelector("#adicionar-paciente");
// Prevenir comportamento padrão
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");  

    // Adquirindo informações do paciente do form
    var paciente = adquiriPacienteDoFormulario(form);

    // criando a tr e a td do paciente
    var pacienteTr = criaTr(paciente);

    var erros = validaPaciente(paciente);
    

    if(erros.length > 0) {
      var mensagemErro = document.querySelector("#mensagem-erro");
      mensagemErro.textContent = erros;
      return;
    }

    // Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset(); // limpar o form
  });   

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

    // Se o if é simples podemos declarar da maneira abaixo
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");    

    if(!validaAltura(paciente.altura)) {
      erros.push("Altura é inválida1");
    } 

    return erros;
  }

