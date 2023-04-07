
let dadosCorrida = [];

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  // Obter os valores dos campos de formulário
  let data = document.getElementById('data').value;
  let distancia = document.getElementById('distancia').value;
  let tempo = document.getElementById('tempo').value;
  let notas = document.getElementById('notas').value;

  // Crie um objeto com os dados da corrida
  let corrida = { data: data, distancia: distancia, tempo: tempo, notas: notas };

  // Adicione o objeto de corrida ao array de dados de corrida
  dadosCorrida.push(corrida);

  // Chame a função para exibir os dados de corrida na página
  exibirDadosCorrida();
});

// Crie uma função para exibir os dados de corrida na página
function exibirDadosCorrida() {
  let tabela = document.getElementById('tabela-corrida');

  // Obter os dados de corrida salvos do localStorage
  let dadosSalvos = JSON.parse(localStorage.getItem('dadosCorrida')) || [];

  // Adicionar os novos dados de corrida ao array de dados salvos
  dadosSalvos.push(dadosCorrida);

  // Salvar o array de dados atualizado no localStorage
  localStorage.setItem('dadosCorrida', JSON.stringify(dadosSalvos));
}

