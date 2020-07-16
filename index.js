loadToDo();
function loadToDo(){
	document.querySelector('form').addEventListener('submit',submit);
	document.querySelector('#clear').addEventListener('click',clearTask);
	document.querySelector('ul').addEventListener('click',deleteOrMark);
}

function submit(event){
	event.preventDefault();
	let input = document.querySelector('input');
	if(input.value != ''){
		addTask(input.value);
		input.value='';
	}
}

function addTask(task){
	let ul = document.querySelector('ul');
	let li = document.createElement('li');
	li.classList.add('list');
	li.innerHTML = `<span class="status">Mark</span><a class="trash">Delete</a><label class="">${task}</label>`;
	ul.appendChild(li);
}

function clearTask(){
	document.querySelector('ul').innerHTML = '';
}

function deleteOrMark(event){
	if(event.target.className == 'trash'){
		putInTrash(event);
	}
	else{
		markEvent(event);
	}
}

function putInTrash(event){
	let removable = event.target.parentNode;
	removable.remove();
}

function markEvent(event){
	let i = true;
	let toBeMarked = event.target.nextSibling;
	if(i){
		// toBeMarked.style.textDecoration = "line-through";
		toBeMarked.nextSibling.classList.toggle('completed');
		i = (!i);
	}
	// else{
	// 	// toBeMarked.style.textDecoration = "none";
	// 	toBeMarked.classList.toggle('not-completed');
	// 	i = (!i);
	// }
}