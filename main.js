const fs = require("fs");
const atualizarDescricoes = require("./src/atualizarDescricoes");
const carregarDados = require("./src/carregarDados");
const criarMapaCodigos = require("./src/criarMapaCodigos");
const exibirResumo = require("./src/exibirResumo");
const salvarDados = require("./src/salvarDados");

async function processarOrcamentos() {
  const dados = await carregarDados(fs);
  const dadosComposicoes = dados.dados_composicoes;
  const dadosOrcamento = dadosComposicoes.dados_orcamentos;

  if (!dadosComposicoes || !dadosOrcamento) {
    console.error("Dados ausentes.");

    try {
      console.log("Tentando carregar os dados novamente...");
      await carregarDados(fs);
    } catch (err) {
      console.error(`Erro ao carregar os dados novamente: ${err}`);
      console.log("Encerrando o script.");
    }

    return;
  }

  const mapaCodigos = criarMapaCodigos(dadosOrcamento);

  const { atualizacoes, adicionados } = atualizarDescricoes(dadosOrcamento, mapaCodigos);

  const quantidadeDadosOrcamento = Object.keys(dadosOrcamento).length;
  console.log(`Processando ${quantidadeDadosOrcamento} orçamentos...`);

  exibirResumo(atualizacoes, adicionados, mapaCodigos.size);

  salvarDados(fs, dados);
}

console.log("Iniciando processamento...");
processarOrcamentos()
  .then(() => console.log("Processamento concluído!"))
  .catch((erro) => console.error(`Erro durante o processamento: ${erro}`));
