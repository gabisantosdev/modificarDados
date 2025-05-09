function salvarDados(fs, dados, caminhoArquivo = "dados.json") {
  try {
    salvarDadosNoArquivo(fs, dados, caminhoArquivo);
  } catch (erro) {
    lancarMensagemErro(erro, caminhoArquivo);
  }
}

function salvarDadosNoArquivo(fs, dados, caminhoArquivo) {
  fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2), "utf8");
  console.log(`Arquivo ${caminhoArquivo} atualizado com sucesso!`);
}

function lancarMensagemErro(erro, caminhoArquivo) {
  console.error(`Erro ao salvar o arquivo ${caminhoArquivo}:`, erro);
  throw erro;
}

module.exports = salvarDados;
