function saudar() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;

  if (nome === "") {
    // Mostra o modal quando o botão "Saudar" é clicado, mas o campo de nome está vazio
    document.getElementById('custom-modal').style.display = 'block';
  } else {
    const mensagem = "Olá, " + nome + "! Bem-vindo!, vejo que possui " + idade + " anos";
    document.getElementById("mensagem").innerText = mensagem;
  }
}

document.querySelector('.close-btn').addEventListener('click', function() {
  // Oculta o modal quando o botão de fechar no modal é clicado
  document.getElementById('custom-modal').style.display = 'none';
});