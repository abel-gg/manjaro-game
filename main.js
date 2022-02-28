const draggableLetters = document.querySelector('.letras').children
const droppableLetters = document.querySelector('.completar').children
let count = 0

const letters = ['m', 'a', 'n', 'j', 'a2', 'r', 'o']

shuffleLetters()

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
    event.dataTransfer.setData('text', event.target.id)
    console.log("enviando " + event.target.id)
}

function dragEnter(event) {
    if (!event.target.classList.contains('dropped')) {
        event.target.classList.add('cuadro-droppable')
    }  
}

function dragLeave(event) {
    if (!event.target.classList.contains('dropped')) {
        event.target.classList.remove('cuadro-droppable')
    }  
} 

function dragOver(event) {
    if (!event.target.classList.contains('dropped')) {
        event.preventDefault()
    }
}

function drop(event) {
    event.preventDefault()
    event.target.classList.remove('cuadro-droppable')
    const draggableElementData = event.dataTransfer.getData('text')
    const droppableElementData = event.target.getAttribute('data-draggable-id')
    console.log(draggableElementData)
    console.log(droppableElementData)
    if (draggableElementData === droppableElementData) {
        event.target.classList.remove('cuadro')
        // event.target.classList.add('fa-solid', `fa-square-${droppableElementData}`)
        // event.target.classList = `fa-solid fa-square-${droppableElementData}`
        event.target.classList.add('fa-solid', 'fa-check', 'fa-3x', 'text-green')
        event.target.classList.add('dropped')
        const draggableElement = document.getElementById(draggableElementData)
        draggableElement.setAttribute('draggable', 'false')
        count++
        checkCount()
    }
}

function checkCount() {
    if (count == 6){
        console.log('Congrats! You win')
    }
}

function shuffleLetters() {
    var letterDiv = document.querySelector('.letras')
    const shuffled = letters.sort(() => Math.random() - Math.random()).slice(0, 7)
    for (var i = 0; i < letters.length; i++) {
        var letterSelected = shuffled[i]
        switch(letterSelected){
            case 'm':
                letterDiv.innerHTML += '<i id="m" class="fa-solid fa-m fa-3x draggable" draggable="true"></i>'
                break
            case 'a':
                letterDiv.innerHTML += '<i id="a" class="fa-solid fa-a fa-3x draggable" draggable="true"></i>'
                break
            case 'n':
                letterDiv.innerHTML += '<i id="n" class="fa-solid fa-n fa-3x draggable" draggable="true"></i>'
                break
            case 'j':
                letterDiv.innerHTML += '<i id="j" class="fa-solid fa-j fa-3x draggable" draggable="true"></i>'
                break
            case 'a2':
                letterDiv.innerHTML += '<i id="a2" class="fa-solid fa-a fa-3x draggable" draggable="true"></i>'
                break
            case 'r':
                letterDiv.innerHTML += '<i id="r" class="fa-solid fa-r fa-3x draggable" draggable="true"></i>'
                break
            case 'o':
                letterDiv.innerHTML += '<i id="o" class="fa-solid fa-o fa-3x draggable" draggable="true"></i>'
                break
            default:
                break
        }
    }

}