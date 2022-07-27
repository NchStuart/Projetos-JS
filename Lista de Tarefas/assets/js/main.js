const caixadetexto = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const ul = document.querySelector('.tarefas');


function gerarTarefas() {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const value = caixadetexto.value;
  if (value == ''){
    return;
  } else {
    li.innerText = value;
    btn.innerText = 'Apagar';
    btn.style.marginLeft = '20px'
    li.appendChild(btn);
    ul.appendChild(li);
    limparInput();
    saveTask();
  }

  btn.addEventListener('click', (e) => {
    const el = e.target;
    el.parentElement.remove();
    saveTask();
  });
}

function gerarTarefasSaved(textoInput) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
    li.innerText = textoInput;
    btn.innerText = 'Apagar';
    btn.style.marginLeft = '20px'
    li.appendChild(btn);
    ul.appendChild(li);
    limparInput();
    saveTask();

  btn.addEventListener('click', (e) => {
    const el = e.target;
    el.parentElement.remove();
    saveTask();
  });
}

function limparInput() {
  caixadetexto.value = '';
  caixadetexto.focus();
}

function saveTask() {
  const liTarefas = ul.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let v of liTarefas) {
    let tarefaTexto = v.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '');
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);  //Mini base de dados do navegador (local storage).
}

function recoverSavedTask() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);
  for (let v of listaDeTarefas) {
      gerarTarefasSaved(v);
  }
}
recoverSavedTask()

btnAddTarefa.addEventListener('click', () => {
  gerarTarefas();
});

caixadetexto.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) gerarTarefas();
});