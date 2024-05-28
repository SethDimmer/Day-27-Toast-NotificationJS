const button = document.getElementById('button')
const toasts = document.getElementById('toasts')


// an array of random messages
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]


button.addEventListener('click', () => createNotification())
// each time i click i want to run the function createNotification()


function createNotification() {
    console.log(123)
}



