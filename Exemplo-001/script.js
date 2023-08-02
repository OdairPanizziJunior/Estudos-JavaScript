function saudar() {
    const nome = document.getElementById("nome").value;

    if (nome === "") {
      alert("Por favor, digite seu nome antes de saudar.");
    } else {
      const mensagem = "Olá, " + nome + "! Bem-vindo!";
      document.getElementById("mensagem").innerText = mensagem;
    }
  }

  function mostraIdade() {
    const idade = document.getElementById("idade").value;
    const info = "Sua idade é: " + idade;
    document.getElementById("info").innerText = info;
  }
