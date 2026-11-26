
const myLibrary = [];



function Book(title, pages, genre, author, readStatus) {
    this.title = title;
    this.pages = pages;
    this.genre = genre;
    this.author = author;
    this.readStatus = readStatus
    this.id = crypto.randomUUID();
    
}

function addBookToLibrary(title, pages, genre, author, readStatus) {

    return myLibrary.push(new Book(title, pages, genre, author, readStatus));
}

function removeBook(event) {
    if(event.target.id === event.target.parentNode.id) {
        const index = myLibrary.findIndex(book => book.id === event.target.id);

        if (index > -1) {
            myLibrary.splice(index, 1);
        }
        showLibrary();
    }
}

Book.prototype.toggleReadStatus = function() {
    this.readStatus = !this.readStatus;
    
}

addBookToLibrary('vampire', 100, 'fantasy', 'Bram Stoker');

function showLibrary() {
    let library = document.querySelector(".library");
    library.replaceChildren();
    for(const book of myLibrary) {
        let newDiv = document.createElement('div');

        //create Buttons for appending to book
        let removeBtn = document.createElement('button');
        removeBtn.addEventListener('click', removeBook);
        let readStatusBtn = document.createElement('button');
        readStatusBtn.addEventListener('click',  () => {
            book.toggleReadStatus();
            showLibrary();
        });
        
        //set div content
        newDiv.setAttribute('id', book.id);
        newDiv.textContent = `Title: ${book.title}
                                Pages: ${book.pages}
                                Genre: ${book.genre}
                                Author: ${book.author}
                                `
        newDiv.style.border = '1px solid black';
        newDiv.style.whiteSpace = 'pre-line'
        library.appendChild(newDiv);

        //append buttons to div and style
        removeBtn.style.border = '1px solid black';
        removeBtn.textContent = 'Remove';
        removeBtn.style.backgroundColor = 'rgb(10,150,200)';
        removeBtn.setAttribute('id', book.id);

        //read button styling
        readStatusBtn.style.border = '1px solid black';
        readStatusBtn.textContent = book.readStatus ? "Read" : "Unread";
        readStatusBtn.style.backgroundColor = book.readStatus ? "green" : "red";
        readStatusBtn.setAttribute('id', book.id);
        
        newDiv.appendChild(removeBtn);
        newDiv.appendChild(readStatusBtn);
    } 
}


//update display to show form to add a book
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
    const status = formData.get('readStatus') === 'Unread';
    console.log(status);
    addBookToLibrary(title, pages, genre, author, status);
    form.toggleAttribute('hidden');
    showLibrary();
})

showLibrary();
console.log(myLibrary);
