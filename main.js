const fs = require("fs");
const atualizarDescricoes = require("./src/atualizarDescricoes");
const carregarDados = require("./src/carregarDados");
const criarMapaCodigos = require("./src/criarMapaCodigos");
const exibirResumo = require("./src/exibirResumo");
const salvarDados = require("./src/salvarDados");

async function processarOrcamentos() {
  const dados = carregarDados(fs);
  const dadosComposicoes = dados.dados_composicoes;
  const dadosOrcamento = dadosComposicoes.dados_orcamentos;

  if (!dadosComposicoes || !dadosOrcamento) {
    console.error("Estrutura de dados não encontrada.");
    return;
  }

  const mapaCodigos = criarMapaCodigos(dadosOrcamento);

  const { atualizacoes, adicionados } = atualizarDescricoes(
    dadosOrcamento,
    mapaCodigos
  );

  console.log(
    `Processando ${Object.keys(dadosOrcamento).length} orçamentos...`
  );

  exibirResumo(atualizacoes, adicionados, mapaCodigos.size);

  salvarDados(fs, dados);
}

console.log("Iniciando processamento...");
processarOrcamentos()
  .then(() => console.log("Processamento concluído!"))
  .catch((erro) => console.error("Erro durante o processamento:", erro));
