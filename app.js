//Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//******Load all event listeners - call ******

loadEventListeners();


//******Load all event listener function******

function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);

}

//***** Add Task function*****

function addTask(e){
    if(taskInput.value === '' ) {
        alert('Add a task');
    }

    //create li element

    const li = document.createElement('li');
    //add class to created li
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create the link icon
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link to li
    li.appendChild(link);
    
    //Append new li to ul
    taskList.appendChild(li);

    //Clear the input
    taskInput.value = '';

    console.log(li);
    e.preventDefault(); //method of event object
}






