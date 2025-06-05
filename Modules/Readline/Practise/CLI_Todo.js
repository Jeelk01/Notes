const readline = require('readline');

let Tasks = [];

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

function displayTodo(todo) {
     const status = todo.done ? '[x]' : '[ ]';
     console.log(`${status} ${todo.index}. ${todo.text}`);
}

function displayTodos(todos) {
     if (todos.length === 0) {
          console.log("No tasks to show.");
          return;
     }

     todos.forEach(displayTodo);
}

function displayTodoStats() {
     const total = Tasks.length;
     const done = Tasks.filter(t => t.done).length;
     const remaining = total - done;
     console.log(`Total: ${total}, Completed: ${done}, Remaining: ${remaining}`);
}

function getAllTodos() {
     return Tasks;
}

function getRemainingTodos() {
     return Tasks.filter(t => !t.done);
}

function getCompletedTodos() {
     return Tasks.filter(t => t.done);
}

function listAllTodos() {
     console.log("All Tasks:");
     displayTodos(getAllTodos());
}

function listRemainingTodos() {
     console.log("Remaining Tasks:");
     displayTodos(getRemainingTodos());
}

function listCompletedTodos() {
     console.log("Completed Tasks:");
     displayTodos(getCompletedTodos());
}

rl.setPrompt('Todo> ');
rl.prompt();

rl.on('line', (query) => {
     const [command, ...args] = query.trim().split(" ");

     switch (command) {
          case 'Add':
               const taskDescription = args.join(" ");
               if (!taskDescription) {
                    console.log("Task description is required.");
               } else {
                    const newTask = {
                         index: Tasks.length + 1,
                         text: taskDescription,
                         done: false
                    };
                    Tasks.push(newTask);
                    console.log(`Added: "${taskDescription}"`);
               }
               break;

          case 'List':
               const listFlag = args.join(" ").trim();
               if (!listFlag) {
                    listRemainingTodos();
               } else if (listFlag === 'A') {
                    listAllTodos();
               } else if (listFlag === '-') {
                    listCompletedTodos();
               } else {
                    console.log("Invalid List flag.");
               }
               break;

          case 'Done':
               const indices = args.map(Number).filter(n => !isNaN(n));
               if (indices.length === 0) {
                    console.log("Please provide valid task numbers.");
               } else {
                    indices.forEach(i => {
                         const task = Tasks.find(t => t.index === i);
                         if (task) {
                              task.done = true;
                              console.log(`Marked Task ${i} as done`);
                         } else {
                              console.log(`Task ${i} not found`);
                         }
                    });
               }
               break;

          case 'stats':
               displayTodoStats();
               break;

          default:
               console.log("Unknown command.");
     }

     rl.prompt();
});
