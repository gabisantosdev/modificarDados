function salvarDados(fs, dados, caminhoArquivo = "dados.json") {
  try {
    salvarDadosNoArquivo(fs, dados, caminhoArquivo);
  } catch (err) {
    lancarMensagemErro(err, caminhoArquivo);
  }
}

function salvarDadosNoArquivo(fs, dados, caminhoArquivo) {
  fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2), "utf8");
  console.log(`Arquivo ${caminhoArquivo} atualizado com sucesso.`);
}

function lancarMensagemErro(err, caminhoArquivo) {
  console.error(`Erro ao salvar o arquivo ${caminhoArquivo}: ${err.message}`);
}

module.exports = salvarDados;
