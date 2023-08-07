// const tasks = [
//     {
//         name: 'task-0',
//         active: true,
//     },
//     {
//         name: 'task-1',
//         active: false,
//     },
//     {
//         name: 'task-2',
//         active: true,
//     },
//     {
//         name: 'task-3',
//         active: true,
//     },
//     {
//         name: 'task-4',
//         active: false,
//     }
// ]


// const setUp = (tasks, rootElementId) => {

//     let taskListHTML = ``

//     for(let i = 0; i < tasks.length; i++){
//         let task = tasks[i]
//         taskListHTML += `
//         <li class="task ${task.active ? '' : 'task--completed'}" data-id = '${i}' >
//             <input id="task-${i}" class="task-checkbox" type="checkbox" name="completed" ${task.active ? '' : 'checked' }>
//             <label for="task-${i}" class="task-text">${task.name}</label>
//             <button class="delete-task">Delete</button>
//             <button class="edit-task">Edit</button>
//         </li>`
//     }

//     document.getElementById(rootElementId).innerHTML = taskListHTML


//     const taskListEl = document.getElementById('tasks')
//     let taskCheckItems = Array.from(taskListEl.querySelectorAll('.task-checkbox, .task-text')) 
//     taskCheckItems.map((taskCheckItem) => {

//         taskCheckItem.addEventListener('click', (event) => {
//             let id = Number(event.target.parentNode.getAttribute('data-id'))

//             tasks[id].active = !tasks[id].active 

//             setUp(tasks, 'tasks')
//         })
//     })
    

//     const deleteBtns = Array.from(taskListEl.querySelectorAll('.delete-task')) 
//     deleteBtns.map((deleteBtn) => {
//         deleteBtn.addEventListener('click', (event) => {
//             let id = Number(event.target.parentNode.getAttribute('data-id'))
//             tasks.splice(id, 1)

//             setUp(tasks, 'tasks')
//         })
//     })

//     const editBtns = Array.from(taskListEl.querySelectorAll('.edit-task')) 
//     editBtns.map((editBtn) => {
//         editBtn.addEventListener('click', (event) => {
//             let taskItem = event.target.parentNode
//             let id = Number(taskItem.getAttribute('data-id'))

            // let editInput = document.createElement('input')
            // editInput.value = tasks[id].name

            // taskItem.replaceChild(editInput, taskItem.querySelector('label'))

            // editInput.addEventListener('keyup', (event) => {
            //     if(event.key === 'Enter'){
            //         tasks[id].name = editInput.value

            //         setUp(tasks, 'tasks')
            //     }
            // })

//         })
//     })

// }



// setUp(tasks, 'tasks')

// let addTask = document.getElementById('add-task')
// let addTaskInput = document.getElementById('add-task-input')


// addTask.addEventListener('click', (event) => {
//     event.preventDefault()

//     tasks.unshift({
//         name: addTaskInput.value,
//         active: true,
//     })
    
//     setUp(tasks, 'tasks')
// })





