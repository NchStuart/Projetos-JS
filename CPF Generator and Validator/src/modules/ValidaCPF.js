export default class ValidaCPF {
  constructor(cpfRecebido) {
      this.cpfRecebido = cpfRecebido;
      Object.defineProperty(this, 'cpfLimpo',{
          get: () => {
              return this.cpfRecebido.replace(/\D+/g, "");
            },
          enumerable: false,
          configurable: false
      })
  }

  eSequencia() {
      return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }

  valida() {
      if (!this.cpfLimpo) return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.eSequencia()) return false;
      const cpfParcial = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidaCPF.criaDigito(cpfParcial);
      const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1)
      const cpfNovo = cpfParcial + digito1 + digito2;
      return cpfNovo === this.cpfLimpo;
  }

  static criaDigito(cpfParcial) {
      const cpfArray = Array.from(cpfParcial);
      let regressivo = cpfArray.length + 1;
      const total = cpfArray.reduce((ac, val) => {
        ac += regressivo * Number(val);
        regressivo--;
        return ac;
      }, 0);
    
      const digito = 11 - (total % 11);
      return digito > 9 ? "0" : String(digito);
  }
}