function atualizarDescricoes(orcamentos, mapaCodigos) {
  let atualizacoes = 0;
  let adicionados = 0;

  for (const orcamentoKey in orcamentos) {
    const orcamento = orcamentos[orcamentoKey];

    if (
      orcamento.dados_composicoes &&
      Array.isArray(orcamento.dados_composicoes)
    ) {
      orcamento.dados_composicoes.forEach((item) => {
        if (item.codigo && mapaCodigos.has(item.codigo)) {
          const descricaoCorreta = mapaCodigos.get(item.codigo);

          if (!item.hasOwnProperty("descricao")) {
            item.descricao = descricaoCorreta;
            console.log(
              `Adicionada descrição para o item ${item.codigo}: "${descricaoCorreta}"`,
            );
            adicionados++;
          }

          if (item.descricao !== descricaoCorreta) {
            console.log(`Atualizada a descrição do item ${item.codigo}:`);
            console.log(`De: "${item.descricao}"`);
            console.log(`Para: "${descricaoCorreta}"`);
            item.descricao = descricaoCorreta;
            atualizacoes++;
          }
        }
      });
    }
  }

  return { atualizacoes, adicionados };
}

module.exports = atualizarDescricoes;
