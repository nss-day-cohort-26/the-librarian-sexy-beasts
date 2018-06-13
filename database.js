const buildBook=  (bTitle, bAuthor, bGenre, bISBN, bFalse, bDue) => {
  let bookObject = {
    Title: bTitle,
    Author: bAuthor,
    Genre: bGenre,
    ISBN: bISBN,
    CheckOut: false,
    Due: " "
  }
  return bookObject
}
let libraryDB = [];
const book = buildBook("Something", "Someone", "Mystery", "345", false, " ");
const book1 = buildBook("How to Please Your Partner", "Mr. Sexy", "Family Life", "2344", false, " ");
const book2 = buildBook("11 Ways To Eat Cactus", "Cactus Guy", "Food", "1443", false, " ");
const book3 = buildBook("How To Cook Cat", "Werid Person", "Food", "324", false, " ");
const book4 = buildBook("Ways To Make Your Baby Shutup", "Annoyed Person", "Family Life", "2245", false, " ");
const book5 = buildBook("How To Avoid People", "Jewel", "Family Life", "2113", false, " " );

libraryDB.push(book, book1, book2, book3, book4, book5)
console.log(libraryDB)