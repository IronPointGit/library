
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
        newDiv.textContent = `Title: ${book.title} \nPages: ${book.pages}, \nGenre: ${book.genre} \nAuthor: ${book.author}`;
        newDiv.style.border = '1px solid black';
        library.appendChild(newDiv);
    }
    
}
showLibrary();
console.log(myLibrary);
