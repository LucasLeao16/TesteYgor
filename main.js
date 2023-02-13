async function buscarEndereco(cep) {
  try {
    const logradouroEL = document.querySelector("#endereco");
    const bairroEl = document.querySelector("#bairro");
    const cidadeEl = document.querySelector("#cidade");
    const ufEl = document.querySelector("#estado");
    const verificarCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const cepConvertido = await verificarCep.json();
    if (cepConvertido.erro) {
      throw Error("CEP não existente !");
    }
    logradouroEL.value = cepConvertido.logradouro;
    bairroEl.value = cepConvertido.bairro;
    cidadeEl.value = cepConvertido.localidade;
    ufEl.value = cepConvertido.uf;
    console.log(cepConvertido);
    return cepConvertido;
  } catch (erro) {
    console.log(erro);
  }
}
const cepEl = document.querySelector("#cep");
cepEl.addEventListener("focusout", () => buscarEndereco(cepEl.value));
console.log("testando git");
