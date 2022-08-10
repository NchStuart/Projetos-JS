const btn = document.querySelectorAll('.btn');
const resultado = document.querySelector('.current-result');
const btnLight = document.querySelectorAll('.btn-light--full');

class Calculadora {
    constructor(resultado) {
        this.resultado = resultado;
        this.currentValue = '';
        this.nextvalue = '';
        this.finalvalue = '';
        this.clearAC();
        this.porcentagem();
        this.apagar()
    }

    addDigit(digito) {
        if (this.resultado.innerText.includes('.') && digito === '.') {
            alert('Não é possivel adicionar 2 pontos em uma numeração!');
        } else if (this.resultado.innerText.length < 8) {
            this.resultado.innerText += digito;
            this.currentValue += digito;
        }
    }

    processOp(operador) {
        this.resultado.innerText = '';
        switch(operador) {
            case '+':
                this.currentValue = +this.currentValue + +this.currentValue;
        }
    }

    processPreviusOp(operador) {
        if (this.currentValue.includes(operador) || operador === '=' || operador === '%' || operador === '«' || operador === 'AC') {
            return;
        } else {
            this.resultado.innerText = '';
            this.currentValue += operador;
            this.equal();
            console.log(this.currentValue)
        }
    }

    equal() {
        const btnequal = document.querySelector('.equal');
        btnequal.addEventListener('click', (e) => {
            this.resultado.innerText = '';
            const resultadoConta = eval(this.currentValue);
            this.resultado.innerText = resultadoConta;
            this.currentValue = String(resultadoConta);
            console.log(this.currentValue)

        });
    }

    clearAC() {
        const btnzerar = document.querySelector('.clear--all');
        btnzerar.addEventListener('click' ,() => {
            this.resultado.innerText = '';
            this.currentValue = '';
        });
    }

    porcentagem() {
        const porcent = document.querySelector('.porcent');
        porcent.addEventListener('click' ,() => {
           const conta = Number(this.resultado.innerText) / 100;
           this.resultado.innerText = String(conta);
           this.currentValue = String(conta);
        });
    }

    apagar() {
        const apagar = document.querySelector('.change');
        apagar.addEventListener('click',() => {
                const apagou = this.currentValue.substring(0, this.currentValue.length - 1);
                const apagouTexto = this.resultado.innerText.substring(0, this.resultado.innerText.length -1);
                this.currentValue = apagou;
                this.resultado.innerText = apagouTexto;
        });
    }

}

const calculadora = new Calculadora(resultado);

btn.forEach((v) => {
    v.addEventListener('click', (e) => {
        const elemento = e.target.innerText;
        if (Number(elemento) >= 0 || elemento === '.') {
            calculadora.addDigit(elemento);
        } else {
            calculadora.processPreviusOp(elemento);
        }
    });
});

// Coisa que faltam fazer: Interação com a cor dos botões amarelos.'