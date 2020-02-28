const listOfToDos = document.querySelector('#app ul');
const inputValue = document.querySelector('#app input');
const addButton = document.querySelector('#app button')
var toDos = [];

function renderToDos(){
	listOfToDos.innerHTML = '';

	for(todo of toDos){
		var toDo = document.createElement('li');
		var edit = document.createElement('a');
		var deleteButton = document.createElement('a');
		var todoText = document.createTextNode(todo);
		
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
}

addButton.onclick = addToList;