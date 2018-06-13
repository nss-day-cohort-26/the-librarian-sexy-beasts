const custBD = Object.create({}, {
  favoriteGenre: " ",
  emptyBookshelf: [ ],
  firstName: " ",
  lastName: " ",
  adress: " ",
  libraryCardNum: " ",
  checkoutBook: " ", 
  returnBook: " "

})
const jewel = Object.create({custDB}, {
  
})
jewel.favoriteGenre= "Horror";
jewel.firstName= "Jewel";
jewel.lastName= "Ramirez";
jewel.adress= "666 Elm St.";
jewel.libraryCardNum= librarian.registerCust();

console.log(jewel)
