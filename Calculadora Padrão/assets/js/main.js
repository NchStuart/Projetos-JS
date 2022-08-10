function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    btnDel: document.querySelector(".btn-del"),
    btnEqual: document.querySelector(".btn-eq"),

    start() {
      alert("Oi, iniciei");
      this.clearDisplay();
      this.delAction();
      this.pressionaEnter();
      this.realizaConta();
    },

    btnParaDisplay(value) {
      if (this.display.value.length < 16) {
        this.display.focus();
        this.display.value += value;
      }
    },

    opParaDisplay(value) {
      this.display.focus();
      this.display.value += value;
    },

    realizaConta(tentativa) {
      this.btnEqual.addEventListener("click", () => {
        try {
          let conta = this.display.value;
          conta = eval(conta);
          if (!conta && conta !== 0) {
            alert("Conta invalida");
            return;
          }

          this.display.value = String(conta);
        } catch (e) {
          alert("Conta invalida");
          return;
        }
      });
    },

    clearDisplay() {
      this.btnClear.addEventListener("click", () => {
        this.display.value = "";
      });
    },
    delAction() {
      this.btnDel.addEventListener("click", () => {
        this.display.value = this.display.value.slice(0, -1);
      });
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", e => {
        let conta = this.display.value;
        if (e.keyCode === 13) {
          conta = eval(conta);
        }
        if (!conta && conta !== 0) {
            alert("Conta invalida");
            return;
        }
        this.display.value = conta;
      });
    },
  };
}

const calculadora = criaCalculadora();
calculadora.start();
const btn = document.querySelectorAll(".btn-num");

for (let v of btn) {
  v.addEventListener("click", (e) => {
    const el = e.target.innerText;
    if (+el >= 0 || el === "(" || el === ")" || el === ".") {
      calculadora.btnParaDisplay(el);
    } else {
      calculadora.opParaDisplay(el);
    }
  });
}
