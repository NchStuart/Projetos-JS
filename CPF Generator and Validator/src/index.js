import generatorCPF from "./modules/generatorCPF";
import ValidaCPF from "./modules/ValidaCPF";
import "./assets/css/style.css";

(function () {
  const gera = new generatorCPF();
  const btnGera = document.querySelector(".btn-gera");
  const btnValida = document.querySelector(".btn-valida");

  btnGera.addEventListener("click", () => {
    const cpfGeradoResultado = document.querySelector(".resultado-gera");
    cpfGeradoResultado.innerHTML = generatorCPF.formatado(gera.geraNovoCpf());
  });

  btnValida.addEventListener("click", e => {
    e.preventDefault();
    const cpfValidaCampo = document.querySelector(".input-valida--cpf");
    const validaCpf = new ValidaCPF(cpfValidaCampo.value);
    const cpfValidadoResultado = document.querySelector(".resultado-valida");
    if (validaCpf.valida()) {
      cpfValidadoResultado.innerHTML = `O CPF ${cpfValidaCampo.value} é valido!`;
    } else {
      cpfValidadoResultado.innerHTML = `O CPF ${cpfValidaCampo.value} está invalido!`;
    }
  });
})();