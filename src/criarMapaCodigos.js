function criarMapaCodigos(orcamentos) {
  const mapaCodigos = new Map();

  for (const orcamentoKey in orcamentos) {
    const orcamento = orcamentos[orcamentoKey];

    if (orcamento.dados_composicoes && Array.isArray(orcamento.dados_composicoes)) {
      orcamento.dados_composicoes.forEach(item => {
        if (item.codigo && item.descricao && !mapaCodigos.has(item.codigo)) {
          mapaCodigos.set(item.codigo, item.descricao);
        }
      });
    }
  }

  console.log(`Mapeados ${mapaCodigos.size} códigos únicos com suas descrições.`);
  return mapaCodigos;
}

module.exports = criarMapaCodigos;