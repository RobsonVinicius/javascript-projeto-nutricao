

var botaoAdicionar = document.querySelector("#adicionar-paciente");
// Prevenir comportamento padrão
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");  

    // Adquirindo informações do paciente do form
    var paciente = adquiriPacienteDoFormulario(form);
    console.log(paciente);

    // criando a tr e a td do paciente
    var pacienteTr = criaTr(paciente);

    // Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
  });   

  // Função adquirir informações do paciente do form
  function adquiriPacienteDoFormulario(form) {
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
      // var nome = form.nome.value;
      // var peso = form.peso.value;
      // var altura = form.altura.value;
      // var gordura = form.gordura.value;
    }
    return paciente   
  }

  // Função responsável por montar a tr (linha com os dados do paciente)
  function criaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // var nomeTd = criaTd(paciente.nome,"info-nome");
    // var pesoTd = criaTd(paciente.peso,"info-peso");
    // var alturaTd = criaTd(paciente.altura,"info-altura");
    // var gorduraTd = criaTd(paciente.gordura,"info-gordura");
    // var imcTd = criaTd(paciente.imc,"info-imc");

    // var nomeTd = document.createElement("td");
    // var pesoTd = document.createElement("td");
    // var alturaTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

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