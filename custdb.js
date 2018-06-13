const custDB = Object.create({}, {
        favoriteGenre: {
            value: ' ',
            ennumrable: true
        },
        emptyBookShelf: {
            value: [],
            enumerable: true
        },
        firstName: {

            value: "",
            enumerable: true
        },
        lastName: {
            value: ' ',
            enumerable: true
        },
        address: {
            value: "",
            enumerable: true
        },
        libraryCardNum: {
            value: "",
            enumerable: true
        },
        checkoutBook: {
            value: 
                function(checkBook) {
                    for (let i = 0; i < libraryDB.length; i++) {
                        if (checkBook.CheckOut === false) {
                        checkBook.CheckOut = !libraryDB[i].CheckOut
                        } 
                    }
                
            },
            enumerable: true
        },
        returnBook: {
            value: 
            function(checkBookIn) {
                for (let i = 0; i < libraryDB.length; i++) {
                    if (checkBookIn.CheckOut === true) {
                    checkBookIn.CheckOut = !libraryDB[i].CheckOut
                    } 
                }
        },
            enumerable: true
        },
    },

)

// custDB.checkoutBook()
custDB.checkoutBook(book)
custDB.returnBook(book1)

console.log('book', book);
console.log('book1', book1);

