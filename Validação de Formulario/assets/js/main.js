let users = [
    {
        id: 1,
        user: 'baianovu',
        email: null,
        password: '124466'
    },
    {
        id: 2,
        user: 'nickstuart',
        email: null,
        password: '664422'
    }
];

class Formulario {
    constructor() {
        this.form = document.querySelector('.formulario');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', (e) => {
            const camposValidos = this.isValidFields();

            
            if (camposValidos) {
            alert('Formulario Enviado!');
            this.form.submit();
            } else {
                e.preventDefault();
            }
        });

    }

    isValidFields() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.form.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;
            if (!campo.value) {
                this.createError(campo, `Campo "${label}" não pode estar vazio!`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) {
                    this.createError(campo, `${label} Invalido!`);
                    valid = false; 
                }
            }

            if (campo.classList.contains('usuario')) {
                const firstDigit = campo.value.charAt(0);

                users.forEach((v) => {
                    if (v.user === campo.value) {
                        this.createError(campo, `${label} já existente!`);
                        valid = false; 
                    }

                });

                if (campo.value.length < 3 || campo.value.length > 12) {
                    this.createError(campo, `${label} deve conter 3 a 12 caracteres!`);
                    valid = false; 
                }

                if (!campo.value.match(/^[a-zA-Z0-9]+$/g) && campo.value.length > 1) {
                    this.createError(campo, `${label} só pode conter letras e numeros!`);
                    valid = false; 
                }

                if (firstDigit.repeat(campo.value.length) === campo.value && campo.value.length > 1) {
                    this.createError(campo, `${label} não pode ter todos os caracteres repetidos!`);
                    valid = false;
                }
            }

            if (campo.classList.contains('senha')) {
                const firstDigit = campo.value.charAt(0);
                if (campo.value.length < 6 || campo.value.length > 12) {
                    this.createError(campo, `${label} precisa ter de 6 a 12 caracteres!`);
                    valid = false;
                }

                if (firstDigit.repeat(campo.value.length) === campo.value && campo.value.length > 1) {
                    this.createError(campo, `${label} não pode ter todos os caracteres repetidos!`);
                    valid = false;
                }
            }

            if (campo.classList.contains('repetir-senha')) {
                const pw = document.querySelector('.senha');

                if (campo.value !== pw.value) {
                    this.createError(campo, `Sua senha precisa ser igual a anterior!`);
                    valid = false;
                }
            }
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        return cpf.valida();
    }

    createError(campo,msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validateForm = new Formulario();

console.log(validateForm)