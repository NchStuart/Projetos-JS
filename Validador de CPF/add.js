const cpf = '705.484.450-52';

let cpfClear = cpf.replace(/\D+/g, ''); // Não é number

let cpfA = Array.from(cpfClear);

let cpfC = cpfA.reduce((ac, v) => ac + Number(v), 0);

console.log(cpfC)

