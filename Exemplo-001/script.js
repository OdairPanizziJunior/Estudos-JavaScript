function saudar() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if (nome === "") {
      alert("Por favor, digite seu nome e idade antes de saudar.");
    } else {
      const mensagem = "Olá, " + nome + "! Bem-vindo!, vejo que possui" + idade + "anos";
      document.getElementById("mensagem").innerText = mensagem;
    }
  }
