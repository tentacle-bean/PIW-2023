"use strict";

const btnAdd = document.getElementById("form-btn-add");
const input = document.getElementById("form-input");
const todoList = document.getElementById("todo-list");
const searchBar = document.getElementById("search-bar");
const btnTrash = $("#btn-trash");

const allToDos = [];

let idCounter = 0;
let trash = '';


searchBar.addEventListener("keyup", (event) => {
    const text = event.target.value;
    filter(text.toLowerCase())
});


function filter(text){
    allToDos.map(element => (!text || element.childNodes[0].textContent.toLowerCase().includes(text))  ? 
                                                                    element.classList.remove("hidden") : 
                                                                    element.classList.add("hidden"));
};


btnAdd.addEventListener("click", (event)=>{
    event.preventDefault();

    const newTodoText = input.value;

    if(newTodoText !== ''){
        input.value = '';

        const newTodoContainer = document.createElement("div");
        newTodoContainer.setAttribute("id", `todo-container-${idCounter++}`)
        newTodoContainer.classList.add("todo-container");

        const newTodo = document.createElement("p");
        newTodo.classList.add("todo");
        newTodo.textContent = newTodoText;
        newTodo.addEventListener("click", done);
        newTodoContainer.appendChild(newTodo);

        const newDate = document.createElement("p");
        newDate.classList.add("date");
        newDate.classList.add("hidden");
        newTodoContainer.appendChild(newDate);

        todoList.appendChild(newTodoContainer);

        $(`#todo-container-${idCounter - 1}`).append(`<button id="todo-X-${idCounter - 1}" class="btn btn-remove">X</button>`);
        $(`#todo-X-${idCounter - 1}`).click(function(eventObj){
            $(this).parent().addClass("trash");
            trash = $(this).parent();
        });

        allToDos.push(newTodoContainer);

        filter(searchBar.value);
    }
});


function done(event){
    const todo = event.target;
    const container = todo.parentNode;
    const todoDate = container.childNodes[1];

    container.classList.toggle("done-container");
    todo.classList.toggle("done-todo");

    if( container.classList.contains("done-container")){
        const date = new Date();
        const dateFormatted = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
        todoDate.textContent = dateFormatted;
        todoDate.classList.remove("hidden");
    }
    else{
        todoDate.classList.add("hidden");
    }
};


btnTrash.click(function(){
    if(trash){
        $(trash).removeClass("trash");
        trash = "";
    }
});


