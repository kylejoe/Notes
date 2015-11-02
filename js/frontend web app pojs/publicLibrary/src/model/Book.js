// The values of the slots properties are assigned to the corresponding
// attributes whenever a new object is created as an instance of this class
function Book ( slots ) {
    this.isbn = slots.isbn;
    this.title = slots.title;
    this.year = slots.year;
}

Book.instances = {} // Initially an empty associative array

Book.add = function(slots){
    var book = new Book(slots);
    // Add book to the Book.instances collection
    Book.instances[slots.isbn] = book;
    console.log("Book " + slots.isbn + " created!");
};

Book.loadAll = function() {
    var key = " ", keys = [], booksString = " ", books={};
    try{
        if (localStorage['books']) {
            booksString = localStorage['books'];
        }
    } catch (e) {
        alert("Error when reading from Local Storage\n" + e);
    }
    if (booksString) {
        books = JSON.parse(booksString);
        keys = Object.keys(books);
        console.log(keys.length + " books loaded.");

        for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            Book.instances[key] = Book.convertRow2Obj(books[key]);
        };
    }
};

Book.update = function(){
    var book = Book.instances[slots.isbn];
    var year = parseInt(slots.year); // parses string and returns an integer
    if (book.title !== slots.title) {
        book.title = slots.title;
    }
    if (book.year !== year) {
        book.year = slots.year;
    }
}

Book.destroy = function (isbn){
    if (Book.instances[isbn]) {
        console.log("Book " + isbn + " deleted");
        delete Book.instances[isbn];
    } else {
        console.log("There is no book with ISBN " + isbn + " in the database!");
    }
};

Books.saveAll = function(){
    var booksString = " ", error = false,
    nmrOfBooks = Object.keys(Book.instances).length;
    try{
        booksString = JSON.stringify(Book.instances);
        localStorage['books'] = booksString;
    } catch(e){}
}






























