let input = document.querySelector("input[type='text']");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByTagName("span");
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");


function loadTodo (){
    if(localStorage.getItem("todoList")){
        ul.innerHTML = localStorage.getItem("todoList")
    }
}
function deleteTodo (){
    for(let span of spans){
        span.addEventListener("click", function (){
            span.parentElement.remove();
        })
    }
}
input.addEventListener("keypress", function(keyPressed){
    if(keyPressed.which ===13){
        let li = document.createElement("li");
        let spanElement = document.createElement("span");
        let icon = document.createElement("i");
        icon.classList.add("fas", "fa-trash-alt");
        spanElement.append(icon);
        let newTodo = this.value;
        this.value= " ";
        ul.appendChild(li).append(spanElement,newTodo);
        deleteTodo();
    }
});

saveBtn.addEventListener("click",function(){
    localStorage.setItem("todoList",ul.innerHTML)
});

clearBtn.addEventListener("click", function(){
    ul.innerHTML = "";
    localStorage.removeItem("todoList", ul.innerHTML)
});

ul.addEventListener("click", function(ev){
    if(ev.target.tagName ==='LI'){
        ev.target.classList.toggle('checked')
    }
});

loadTodo();
deleteTodo();