const inputTextAddTodo = document.querySelector('.form-add-todo')
const inputTextSearchTodo = document.querySelector('.form-search input')
const todosList = document.querySelector('.todos-container')

const addItemIntoTodo = inputValue => {
        todosList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt trash-icon" data-trash="${inputValue}"></i>
        </li>`
}

const removeItemTodo = clickedElement => {
    const trashItem = clickedElement.dataset.trash
    const itemTodo = document.querySelector(`[data-todo="${trashItem}"]`)

    if(trashItem){
        itemTodo.remove()
    }
}

const manipulateClass = (todo, classToAdd, classToremove) => {
    todo.forEach(todo => {
        todo.classList.add(classToAdd)
        todo.classList.remove(classToremove)
    })
}

const showTodos = todo => {
    manipulateClass(todo, 'd-flex', 'hidden')
}

const hideTodos = todo => {
    manipulateClass(todo, 'hidden', 'd-flex')
}

const addTodo = event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    
    if(inputValue.length){
        addItemIntoTodo(inputValue)
        event.target.reset()
    }
}

const searchTodo = () => {
    const todoList = Array.from(todosList.children)
    const searchedInputValue = inputTextSearchTodo.value.toLowerCase()
    const todoMatched = todoList.filter(todo => {
        return todo.textContent.toLowerCase().includes(searchedInputValue)
    })

    hideTodos(todoList)
    showTodos(todoMatched)
}

const removeTodo = event => {
    const clickedElement = event.target
    removeItemTodo(clickedElement)
}

inputTextAddTodo.addEventListener('submit', addTodo)
inputTextSearchTodo.addEventListener('input', searchTodo)
todosList.addEventListener('click', removeTodo)

