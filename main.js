//listeners

document.querySelector('button').onclick=()=> {
let textfield = document.querySelector('input[type="text"]')
let newTodo = document.createElement('li')
let info = document.querySelector('.info')
 if ( textfield.value !== ''){
	 newTodo.innerHTML = textfield.value
	 document.querySelector('ul').appendChild(newTodo)
 } else {
	info.innerHTML = 'Write something!'
 }
 textfield.onchange = e => {
	info.style.display = 'none'
	console.log(textfield.value)
}
}

document.querySelector('ul').onclick = e => {

	if(e.target.className === 'crossed') {
		document.querySelector('ul').removeChild(e.target)
		console.log('adladljs')
	} else {
		e.target.className += 'crossed'
	}
}
