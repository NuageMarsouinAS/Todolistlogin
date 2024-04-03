// const input = document.querySelector('.input');
// const button = document.querySelector('.addTask');   
// const taskName = document.querySelector('.taskName');
// const MarkAsDonebtn = document.querySelector('.MarkAsDone');
// const deleteTaskbtn = document.querySelector('.deleteTask');
// const ALLABOVE = document.querySelector('.ALLABOVE');
// const taskContainer = document.querySelector('.taskContainer');
// const task = document.querySelector('.task');


// button.addEventListener('click', function(){
//     const taskName = input.value.trim();
//     if(taskName === ''){
//         alert('Please enter a task');
//         return;
//     }
//     const task = document.createElement('div');
//     task.className = 'task';

//     const Newp = document.createElement('p');
//     Newp.className = 'taskName';
//     Newp.textContent = taskName;

//     const MarkAsDonebtn = document.createElement('button');
//     MarkAsDonebtn.className = 'MarkAsDone';
//     MarkAsDonebtn.setAttribute('role', 'button');
//     MarkAsDonebtn.setAttribute('aria-label', 'Mark as done');
//     MarkAsDonebtn.textContent = 'Marquer';

//     const deleteTaskbtn = document.createElement('button');
//     deleteTaskbtn.className = 'deleteTask';
//     deleteTaskbtn.setAttribute('role', 'button');
//     deleteTaskbtn.setAttribute('aria-label', 'Delete task');
//     deleteTaskbtn.textContent = 'Supprimer';

//     task.append(Newp, MarkAsDonebtn, deleteTaskbtn);
//     taskContainer.append(task);

//     input.value = '';
// });

const input = document.querySelector('.input');
const button = document.querySelector('.addTask');
const taskContainer = document.querySelector('.taskContainer');
const task = document.querySelector('.task');

taskContainer.addEventListener('click', function(event){
    if (event.target.className === 'deleteTask') {
        event.target.parentElement.remove();
    } else if (event.target.className === 'MarkAsDone') {
        // Access the sibling <p> element with the class 'taskName'.
        let taskNameElement = event.target.previousElementSibling;
        // Toggle the 'line-through' style on the <p> element.
        taskNameElement.style.textDecoration = taskNameElement.style.textDecoration === 'line-through' ? '' : 'line-through';
        if (event.target.textContent === 'Marquer') {
            event.target.textContent = 'Annuler';
        } else {
            event.target.textContent = 'Marquer';
        }
    }
});

const taskHtmlFunction = function(taskName){
    return `
    <div class="task">
        <p class="taskName">${taskName}</p>
        <button class="MarkAsDone">Marquer</button>
        <button class="deleteTask">Supprimer</button>
    </div>
    `};

const addTask = function(){
    const taskName = input.value.trim();
    if (taskName === '') {
        alert('Please enter a task');
        return;
    };
    taskContainer.insertAdjacentHTML('beforeend', taskHtmlFunction(taskName))

    input.value = '';
}

button.addEventListener('click', addTask);

input.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        addTask();
    }
});

let logOutBtn = document.getElementById("logOutBtn");

logOutBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  