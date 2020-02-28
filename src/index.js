const listOfToDos = document.querySelector('#app ul');
const inputValue = document.querySelector('#app input');
const addButton = document.querySelector('#app button')
var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDos(){
	listOfToDos.innerHTML = '';

	for(todo of toDos){
		var toDo = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var edit = document.createElement('a');
		
		var deleteButton = document.createElement('a');
		var deleteButtonText = document.createTextNode('Excluir');

		deleteButton.appendChild(deleteButtonText);
		deleteButton.setAttribute('href', '#');

		var pos = toDos.indexOf(todo);
		deleteButton.setAttribute('onclick', 'deleteTodo('+ pos +')');
		
		toDo.appendChild(todoText);
		toDo.appendChild(edit);
		toDo.appendChild(deleteButton);
	
		listOfToDos.appendChild(toDo);	
	}
}

function addToList() {
	toDos.push(inputValue.value);
	inputValue.value = "";
	renderToDos();
	saveToStorage();
}

function deleteTodo(position){
	toDos.splice(position, 1);
	renderToDos();
	saveToStorage();
}

addButton.onclick = addToList;

function saveToStorage(){
	localStorage.setItem('list_todos', JSON.stringify(toDos));
}