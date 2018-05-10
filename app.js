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
    //Remove task even
    taskList.addEventListener('click', removeTask);
    //Clear all task events
    clearBtn.addEventListener('click', clearTasks);
    //Filter tasks event
    filter.addEventListener('keyup', filterTasks);

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

    // console.log(li);
    e.preventDefault(); //method of event object
}



//Remove Task Handler

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
             
        }
}



//Clear all Tasks

function clearTasks(){
   //option a
//    taskList.innerHTML = "";
    
//Faster, option B
while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
}


//while ul taskList has a first child(the li) we will remove the child, taskLit.firstChild (li)

//https://jsperf.com/innerhtml-vs-removechild/47

}

//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            } 
        }
    );
    console.log(text);
}



