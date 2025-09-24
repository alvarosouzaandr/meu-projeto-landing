document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    document.getElementById('mensagemSucesso').textContent =
      `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    this.reset();
  }
});
