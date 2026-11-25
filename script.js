
const myLibrary = [];

function Book(title, pages, genre, author) {
    this.title = title;
    this.pages = pages;
    this.genre = genre;
    this.author = author;
}

function addBookToLibrary(title, pages, genre, author) {

    return myLibrary.push(new Book(title, pages, genre, author));
}


addBookToLibrary('vampire', 100, 'fantasy', 'Bram Stoker');

function showLibrary() {
    let library = document.querySelector(".library");
    for(const book of myLibrary) {
        console.log(book);
        let newDiv = document.createElement('div');
        newDiv.textContent = `Title: ${book.title} \n Pages: ${book.pages} \n Genre: ${book.genre} \n Author: ${book.author}`;
        newDiv.style.border = '1px solid black';
        newDiv.style.whiteSpace = 'pre-line'
        library.appendChild(newDiv);
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
