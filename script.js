const rootElId = 'tasks'



/**
 * 
 * @param {Number} todoId 
 */

const toggleActiveState = (event) => {
    const todoItemId = parseInt(event.target.parentNode.getAttribute('data-id'))
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id === todoItemId){
         tasks[i].active = !tasks[i].active
         updateTodo(tasks[i])
         break
        }
     }
}


/**
 * 
 * @param {Number} todoId 
 */

const deleteTodo = (event) => {
    const todoItemId = parseInt(event.target.parentNode.getAttribute('data-id'))
    for(let i = 0; i < tasks.length; i++){
       if(tasks[i].id === todoItemId){
        tasks = [...tasks.slice(0, i), ...tasks.slice(i + 1, tasks.length)]
        break
       }
    }

    document.getElementById(`task-${todoItemId}`).remove()
}


/**
 * 
 * @param {Number} todoId 
 */

const startEditTodo = (event) => {
    const todoItemId = parseInt(event.target.parentNode.getAttribute('data-id'))
    const todoItem = event.target.parentNode
    
    let index = 0
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id === todoItemId){
            index = i
            break
        }
     }



    let editInput = document.createElement('input')
    editInput.value = tasks[index].name

    todoItem.replaceChild(editInput, todoItem.querySelector('label'))

    editInput.addEventListener('keyup', (event) => {
        if(event.key === 'Enter'){
            tasks[index].name = editInput.value

            let editInputLabel = document.createElement('label')
            editInputLabel.for = `task-${index}`
            editInputLabel.classList.add('task-text')
            editInputLabel.textContent = tasks[index].name

            todoItem.replaceChild(editInputLabel, editInput)
        }
    })
}


/**
 * 
 * @param {Number} todoId 
 */

const updateTodo = (task) => {
    if(task.active){
        document.getElementById(`task-${task.id}`).classList.remove('task--completed')
    }else{
        document.getElementById(`task-${task.id}`).classList.add('task--completed')
    }
    
}



const itemTemplate = (task) => {
    // todo item
    const todoItem = document.createElement('li')
    todoItem.classList.add('task')
    task.active ? '' : todoItem.classList.add('task--completed')
    todoItem.setAttribute('data-id', task.id)
    todoItem.id = `task-${task.id}`

    //inputTodo
    const inputTodo = document.createElement('input')
    inputTodo.type = 'checkbox'
    inputTodo.classList.add('task-checkbox')
    inputTodo.name = 'completed'
    inputTodo.checked = !task.active
    inputTodo.addEventListener('click', toggleActiveState)
    todoItem.appendChild(inputTodo)

    //inputTodoLabel
    const inputTodoLabel = document.createElement('label')
    inputTodoLabel.classList.add('task-text')
    inputTodoLabel.for = `task-${task.id}`
    inputTodoLabel.textContent = task.name
    todoItem.appendChild(inputTodoLabel)

    //deleteBtn
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-task')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', deleteTodo)
    todoItem.appendChild(deleteBtn)

    //editBtn
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-task')
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', startEditTodo)
    todoItem.appendChild(editBtn)


return todoItem
} 


const init = () => {
    for(let i = 0; i < tasks.length; i++){
        document.getElementById(rootElId).appendChild(itemTemplate(tasks[i]))
    }

}


/**
 * {name; ${todoName}, active: true/falce}
 * @param todoData 
 */

const addTodo = (todoData) => {
    tasks.unshift(todoData)
    document.getElementById(rootElId).prepend(itemTemplate(todoData)) 
}