function exibirResumo(atualizacoes, adicionados, totalCodigos) {
  console.log(`Resumo das alterações:`);
  console.log(`- ${adicionados} descrições adicionadas`);
  console.log(`- ${atualizacoes} descrições atualizadas`);
  console.log(`- ${totalCodigos} códigos únicos processados`);
}

module.exports = exibirResumo;