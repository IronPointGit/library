
const myLibrary = [];

let removeBtn = document.createElement('button');
removeBtn.addEventListener('click', removeBook);
let readStatusBtn = document.createElement('button');
readStatusBtn.addEventListener('click', readStatus);

function Book(title, pages, genre, author) {
    this.title = title;
    this.pages = pages;
    this.genre = genre;
    this.author = author;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, pages, genre, author) {

    return myLibrary.push(new Book(title, pages, genre, author));
}

function removeBook() {
    
}

function readStatus(event) {
    if (event.target.textContent === 'Read') {
        event.target.style.backgroundColor = 'red';
        event.target.textContent = 'Unread';
    }
    else {
        event.target.style.backgroundColor = 'green';
        event.target.textContent = 'Read';
    }
    
}

addBookToLibrary('vampire', 100, 'fantasy', 'Bram Stoker');

function showLibrary() {
    let library = document.querySelector(".library");
    library.replaceChildren();
    for(const book of myLibrary) {
        let newDiv = document.createElement('div');
        
        newDiv.textContent = `Title: ${book.title}
                                Pages: ${book.pages}
                                Genre: ${book.genre}
                                Author: ${book.author}
                                ID: ${book.id}`;
        newDiv.style.border = '1px solid black';
        newDiv.style.whiteSpace = 'pre-line'
        library.appendChild(newDiv);
        removeBtn.style.border = '1px solid black';
        removeBtn.textContent = 'Remove';
        removeBtn.style.backgroundColor = 'rgb(10,150,200)';
        removeBtn.setAttribute('id', book.id);
        readStatusBtn.style.border = '1px solid black';
        readStatusBtn.textContent = 'Unread';
        readStatusBtn.style.backgroundColor = 'red';
        readStatusBtn.setAttribute('id', book.id);
        newDiv.appendChild(removeBtn);
        newDiv.appendChild(readStatusBtn);
    } 
}

function newBook() {
    let newForm = document.querySelector('.newBookForm');
    newForm.toggleAttribute('hidden')
}

let newBookBtn = document.querySelector('#newBookBtn');
newBookBtn.addEventListener('click', newBook);


const form = document.querySelector('.newBookForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get('title');
    const pages = formData.get('pages');
    const genre = formData.get('genre');
    const author = formData.get('author');

    addBookToLibrary(title, pages, genre, author);
    form.toggleAttribute('hidden');
    showLibrary();
})

showLibrary();
console.log(myLibrary);
