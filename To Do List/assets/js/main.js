let cont = 0;
let c = 0;

class Tarefas {
  constructor() {
    this.addTask();
    this.recoveryTask();
    this.clearTask();
  }

  addTask() {
    const InputAddTask = document.querySelector("#addtarefa");
    const btnAddTask = document.querySelector(".btnaddtarefa");

    btnAddTask.addEventListener("click", () => {
      this.saveTask();

      if (!InputAddTask.value) {
        alert("Digite o nome de uma tarefa valida.");
        return;
      }

      const task = localStorage.getItem('task');
      const taskList = JSON.parse(task);

      for (let v of taskList) {
        if (InputAddTask.value == v) {
          alert("Essa tarefa já existe, tente outro nome.");
          return;
        }
      }

      this.createTask(InputAddTask.value);
      InputAddTask.value = '';
      this.saveTask();
    });
  }

  clearTask() {
    const btnClear = document.querySelector('.limparTarefas');
    btnClear.addEventListener('click', () => {
      localStorage.clear();
      const ul = document.querySelector('ul');
      ul.textContent = '';
      cont = 0;
    });
  }

  doneTask() {
    const btnDone = document.querySelector(`.btnconcluir${cont}`);

    btnDone.addEventListener('click', (e) => {
        const el = e.target;
        const dad = el.parentNode;
  
        dad.classList.toggle('done');
        this.saveTask();
    })
  }


  editTask() {
    // parei aqui
  }

  removeTask() {

  }

  createTask(value) {
    const ul = document.querySelector(".lista");
    const li = document.createElement("li");
    const p = document.createElement("p");
    const runCont = () => {
      cont++
      return cont;
    };
    const ddCont = () => {
      btnCons.addClasslist('done')
      localStorage.setItem('task', listJSON)
    }


    ul.appendChild(li);
    li.classList.add(`tarefa${runCont()}`);
    li.appendChild(p);
    p.innerText = value;
    const btnConc = document.createElement('button');
    li.appendChild(btnConc);
    btnConc.classList.add(`btnconcluir${cont}`)
    btnConc.innerText = "Concluir";
    const btnEdit = document.createElement('button');
    li.appendChild(btnEdit);
    btnEdit.classList.add('btneditar')
    btnEdit.innerText = "Editar";
    const btnRem = document.createElement('button');
    li.appendChild(btnRem);
    btnRem.classList.add('btnrem')
    btnRem.innerText = "Remover";
    this.doneTask();
  }

  saveTask() {
    const ul = document.querySelector(".lista");
    const li = ul.querySelectorAll('li');
    const listTask = [];
    const listDone = [];

    for (let v of li) {
      let taskText = v.innerText;
      taskText = taskText.replace('Concluir', '');
      taskText = taskText.replace('Editar', '');
      taskText = taskText.replace('Remover', '');
      taskText = taskText.replace(/(\r\n|\n|\r)/gm, "");

      listTask.push(taskText);
    }

    const taskJSON = JSON.stringify(listTask);
    localStorage.setItem('task', taskJSON);

    const index = li.forEach((v,i) => {
      if (v.classList.contains('done')) {
        listDone.push(String(i))
      };
    });

    const doneJSON = JSON.stringify(listDone);
    localStorage.setItem('done', doneJSON);
  }

  recoveryTask() {
    const task = localStorage.getItem('task');
    const done = localStorage.getItem('done');
    const taskList = JSON.parse(task);
    const doneList = JSON.parse(done);
    let indexLi = [];

    if (!taskList) return;

    for (let v of taskList) {
      this.createTask(v);
    }

    for (let v of doneList) {
      indexLi.push(Number(v))
    }

    const li = document.querySelectorAll('li');
    
    li.forEach((v,i) => {
      for (let value of indexLi) {
        if (value == i) {
          v.classList.add('done')
        }
      }
    });
  }
}
const tarefa = new Tarefas();
