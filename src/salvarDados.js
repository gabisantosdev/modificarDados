function salvarDados(fs, dados, caminhoArquivo = 'dados.json') {
  try {
    fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2), 'utf8');
    console.log(`Arquivo ${caminhoArquivo} atualizado com sucesso!`);
  } catch (erro) {
    console.error(`Erro ao salvar o arquivo ${caminhoArquivo}:`, erro);
    throw erro;
  }
}

module.exports = salvarDados;