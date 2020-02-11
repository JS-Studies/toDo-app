const listOfToDos = document.querySelector('ul');
const inputValue = document.querySelector('input');
const addButton = document.querySelector('button')
var toDos = [

]

function renderToDos(){
	for(todo of toDos){
		var toDo = document.createElement('li');
		var edit = document.createElement('a');
		var deleteButton = document.createElement('a');

		toDo.textContent = todo;
	
		toDo.appendChild(edit);
		toDo.appendChild(deleteButton);
		listOfToDos.appendChild(toDo);	
	}
}
function addToList() {
	toDos.push(inputValue.value);
	renderToDos();
}
