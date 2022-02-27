const draggableLetters = document.querySelector('.letras').children
const droppableLetters = document.querySelector('.completar').children


Array.from(draggableLetters).forEach(elem => {
    elem.addEventListener('dragstart', dragStart)
})

Array.from(droppableLetters).forEach(elem => {
    elem.addEventListener('dragenter', dragEnter)
    elem.addEventListener('dragover', dragOver)
    elem.addEventListener('dragleave', dragLeave)
    elem.addEventListener('drop', drop)
})

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.class)
}

function dragEnter(event) {
    event.target.classList.add('cuadro-droppable')
}

function dragLeave(event) {
    event.target.classList.remove('cuadro-droppable')
} 

function dragOver(event) {
    event.preventDefault()
}

function drop(event) {
    event.preventDefault()
    const draggableElementData = event.dataTransfer.getData('text')
    event.target.style.color = '#47E42B'
}