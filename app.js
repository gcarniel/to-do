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




inputTextAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    
    if(inputValue.length){
        addItemIntoTodo(inputValue)
        event.target.reset()
    }
})
