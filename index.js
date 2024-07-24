const button = document.querySelector(".click");
const newTask = document.querySelector(".tasks");
const list = document.querySelector(".list");
const checked = document.querySelector(".task-check");

const addTask = () =>{
    const task = newTask.value.trim();
    if(!task){
        alert("Please enter a task");
        return;
    }
    else{

        const addNewTask = `<div class="addedTasks">
        <span class="task-name">${task}</span>
                <input type="checkbox" class="task-check">
                
        </div>`

        list.insertAdjacentHTML("beforeend", addNewTask);
        
    }
    newTask.value = "";
    buttonAnimation();

}

button.addEventListener("click", addTask);

function removeTask(checkbox) {
    if (checkbox.checked) {
        checkbox.parentElement.remove();
    }
}

list.addEventListener('change', function(event) {
    if (event.target.classList.contains('task-check')) {
        setTimeout(() => {
            removeTask(event.target);
        }, 200);   
    }
});

function buttonAnimation(){

    var activeButton = document.querySelector(".click");
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

