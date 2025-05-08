function carregarDados(fs, caminhoArquivo = 'dados.json') {
  try {
    return JSON.parse(fs.readFileSync(caminhoArquivo, 'utf8'));
  } catch (erro) {
    console.error(`Erro ao carregar o arquivo ${caminhoArquivo}:`, erro);
    throw erro;
  }
}

module.exports = carregarDados;