function criarMapaCodigos(orcamentos) {
  const mapaCodigos = new Map();
  const orcamento = []

  Object.keys(orcamentos).forEach((orcamentoKey) => {
    orcamento = orcamentos[orcamentoKey];

    if (!dadosComposicoesEArray(orcamento)) return;

    orcamento.dados_composicoes.forEach((item) => verificarMapaCodigos(item, mapaCodigos));
  });

  console.log(`Mapeados ${mapaCodigos.size} códigos únicos com suas descrições.`);

  return mapaCodigos;
}

function dadosComposicoesEArray(orcamento) {
  return orcamento.dados_composicoes && Array.isArray(orcamento.dados_composicoes);
}

function verificarMapaCodigos(item, mapaCodigos) {
  const codigoEDescricao = item.codigo && item.descricao;
  if (!codigoEDescricao && mapaCodigos.has(item.codigo)) return;

  mapaCodigos.set(item.codigo, item.descricao);
}

module.exports = criarMapaCodigos;