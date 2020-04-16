const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // alert('New TODO button clicked!')

  const todo = prompt("Enter To-Do : ")
  console.log("todo : " + todo)
  if(todo == null || todo == "")
  	return

  //item is one element of list
  const item = document.createElement('li')

  const quantity = parseInt(itemCountSpan.innerText)
  const uncheckedItems = parseInt(uncheckedCountSpan.innerText)

  //parts of an item
  const label = document.createElement('span')
  const checkbox = document.createElement('input')
  const deleteBtn = document.createElement('button')

  //label setup
  label.classList.add(classNames.TODO_TEXT)
  label.innerText = todo

  //checkbox setup
  checkbox.classList.add(classNames.TODO_CHECKBOX)
  checkbox.setAttribute('type', 'checkbox')
  checkbox.addEventListener('click', handleCheck, false)

  //delete button setup
  deleteBtn.classList.add(classNames.TODO_DELETE)
  deleteBtn.innerText = "X"
  deleteBtn.addEventListener('click', handleDelete, false)

  item.classList.add(classNames.TODO_ITEM)
  item.appendChild(checkbox)
  item.appendChild(label)
  item.appendChild(deleteBtn)

  list.appendChild(item)

  itemCountSpan.innerText = quantity + 1
  uncheckedCountSpan.innerText = uncheckedItems + 1
}

  function handleCheck(event)
  {
  	const checkbox = event.target
  	const item = event.target.parentNode

  	const uncheckedItems = parseInt(uncheckedCountSpan.innerText)

  	item.classList.add(classNames.CHECKED_TODO);
  	if(checkbox.checked){
  		uncheckedCountSpan.innerText = uncheckedItems - 1
  	}
  	else{
  		uncheckedCountSpan.innerText = uncheckedItems + 1
  	}
  }

  function handleDelete(event)
  {
  	const item = event.target.parentNode

  	const uncheckedItems = parseInt(uncheckedCountSpan.innerText)
  	const quantity = parseInt(itemCountSpan.innerText)

  	const checked = item.children[0].checked

  	itemCountSpan.innerText = quantity - 1

  	if(!checked){
  		uncheckedCountSpan.innerText = uncheckedItems - 1
  	}
  	item.remove()
  }
