const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function listTasks() {
  console.log('\nLista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
  });
}

function addTask(description) {
  tasks.push({
    description: description,
    completed: false
  });
  console.log(`Tarea añadida: "${description}"`);
}

function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    const removedTask = tasks.splice(index, 1);
    console.log(`Tarea eliminada: "${removedTask[0].description}"`);
  } else {
    console.log('Índice inválido');
  }
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log(`Tarea completada: "${tasks[index].description}"`);
  } else {
    console.log('Índice inválido');
  }
}

function askForAction() {
  rl.question(
    '\nElige una acción (añadir/eliminar/completar/listar/salir): ',
    (answer) => {
      switch (answer) {
        case 'añadir':
          rl.question('\nIntroduce la descripción de la tarea: ', (description) => {
            addTask(description);
            askForAction();
          });
          break;
        case 'eliminar':
          rl.question('\nIntroduce el número de tarea a eliminar: ', (index) => {
            removeTask(parseInt(index) - 1);
            askForAction();
          });
          break;
        case 'completar':
          rl.question('\nIntroduce el número de tarea a completar: ', (index) => {
            completeTask(parseInt(index) - 1);
            askForAction();
          });
          break;
        case 'listar':
          listTasks();
          askForAction();
          break;
        case 'salir':
          rl.close();
          break;
        default:
          console.log('Acción inválida. Inténtalo de nuevo.');
          askForAction();
      }
    }
  );
}

askForAction();
