const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todos = document.querySelector('#todos');
form.addEventListener('submit', (e)=>{
e.preventDefault();

addTodo();


});

function addTodo(){
    const todoText = input.value;
    if(todoText){
        const todoEl = document.createElement("li");
        todoEl.innerText=todoText;
        
        
        todoEl.addEventListener("click", ()=>{
            todoEl.classList.toggle('completed');
        } );
        
        todoEl.addEventListener("contextmenu", (e)=>{
            e.preventDefault();
            todoEl.remove();
        });
        
        
        todos.appendChild(todoEl);
        input.value = "";
        }
    }