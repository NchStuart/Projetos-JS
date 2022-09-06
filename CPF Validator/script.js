function ValidaCPF(cpfEnviado) {
  Object.defineProperties(this, {
    cpfLimpo: {
      get: () => {
        return cpfEnviado.replace(/\D+/g, "");
      },
    },
    resultado: {
      get: () => {
        return document.querySelector(".resultado");
      },
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (!this.cpfLimpo) return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;
  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1)
  const cpfNovo = cpfParcial + digito1 + digito2;
  return cpfNovo === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

document.querySelector(".submit").addEventListener("click", () => {
  const inputText = document.querySelector(".cpfCampo").value;
  const cpf = new ValidaCPF(inputText);
  cpf.resultado.innerHTML = '';
  if (cpf.valida()) {
    cpf.resultado.innerHTML = `CPF ${inputText} é valido`;
  } else {
    cpf.resultado.innerHTML = `CPF ${inputText} é Invalido`;
  }
});
