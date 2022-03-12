//variables
const todoInput = document.querySelector("#todo-input")
const addBtn = document.querySelector("#add-btn")
const todoList = document.querySelector("ul")

let todoArray = new set();
let user;
//function to add new
const  addTodo = ()=>{
    if(todoArray.size != 5){
        if(todoInput.value !=""){
            todoInput.parentElement.classList.remove("error")
            todoArray.add(todoInput.value)

            if(user){
                let db =[...todoArray]     //spreads the content of todoArray into db
                let _db =(JSON.stringify(db))  //_db is the string form of db array

            localStorage.setItem(user, _db)
            setTodo(todoArray)
        }
        else{
            setTodo(todoArray)
        }
    }else{
        todoInput.parentElement.classList.add("error")
    }
 } else{
        todoInput.value = ''
        alert('you have five things to do')
    }
}

//event handlers
addBtn.addEventListener('click',addTodo)

const setTodo = (arr) => {
    let htmlArr = '';

    for(el of arr){
        let html =
        `<li id=${el}
        <div class ="todo">
        <p>${el}</p>
        <imput type="text" class="hide"/>
        </div>

        <div class ="btns">
        <button>edit</button>
        <button>save</button>
        <button>delete</button>
        </div>
 </li>`
 htmlArr += html
    }
todoList.innerHTML =htmlArr
// informText()


}