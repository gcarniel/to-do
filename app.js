const inputTextAddTodo = document.querySelector('.form-add-todo')
const inputTextSearchTodo = document.querySelector('.form-search input')
const todosList = document.querySelector('.todos-container')

const addItemIntoTodo = inputValue => {
        todosList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
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

const showItemTodo = todo => {
    manipulateClass(todo, 'd-flex', 'hidden')
}

const hideItemTodo = todo => {
    manipulateClass(todo, 'hidden', 'd-flex')
}

inputTextSearchTodo.addEventListener('input', () => {
    const todoList = Array.from(todosList.children)
    const inputSearched = inputTextSearchTodo.value.toLowerCase()
    const todoMatched = todoList.filter(todo => todo.textContent.toLowerCase().includes(inputSearched))

    hideItemTodo(todoList)
    showItemTodo(todoMatched)
})


inputTextAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    
    if(inputValue.length){
        addItemIntoTodo(inputValue)
        event.target.reset()
    }
})

todosList.addEventListener('click', event => {
    const clickedElement = event.target
    removeItemTodo(clickedElement)
})

