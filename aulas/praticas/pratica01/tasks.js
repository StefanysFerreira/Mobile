const tasks = [
    {
      id: 1,
      name: "Fazer compras",
      completed: false
    },
    {
      id: 2,
      name: "Estudar para o exame",
      completed: true
    },
    {
      id: 3,
      name: "Ir à academia",
      completed: false
    }
  ];
  
  console.log(tasks);


  function getTasks(){
    return tasks;
 }

 function addTask(taskName){
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);

    const newTask = {
        id: maxId + 1,
        name: taskName,
        completed: false
      };
    
      tasks.push(newTask);
    }
    
    addTask("estudar");
 
 console.log(tasks);

 const removeTask = (taskId) => {
 const index = tasks.findIndex((task) => task.id === taskId)
 tasks.splice(index, 1)
 };

 const updateTask = (taskId, taskprops) => {
    const index = tasks.findIndex((task) => task.id === taskId)
    tasks[index]={id: taskId, ...taskprops}
 }

 export {getTasks, addTask, removeTask, updateTask}