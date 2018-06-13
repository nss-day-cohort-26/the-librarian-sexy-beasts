
//in customers.js file add favgenre, first and last name and address to new variable with your name like example below

let adelaide = Object.create({custDB}, {
})
adelaide.favoriteGenre = 'fiction'
adelaide.firstName = 'Adelaide'
adelaide.lastName = 'Yoder'
adelaide.address = '456 avenue'
adelaide.libraryCardNum= librarian.registerCust();


console.log('Adelaide', adelaide);

let michael = Object.create({custDB}, {})
michael.favoriteGenre = 'fiction'
michael.firstName = 'Michael',
michael.lastName = "Roberts",
michael.adress = " 265 Karnes Dr. ",
michael.libraryCardNum= librarian.registerCust();
console.log('Michael', michael);


let robert = Object.create({custDB}, {
})
robert.favoriteGenre = 'fiction'
robert.firstName = 'Robert'
robert.lastName = 'Leedy'
robert.address = '1428 Timber Ridge Cir'
robert.libraryCardNum= librarian.registerCust();

console.log('Robret', robert);


const jewel = Object.create({custDB}, {
  
})
jewel.favoriteGenre= "Horror";
jewel.firstName= "Jewel";
jewel.lastName= "Ramirez";
jewel.adress= "666 Elm St.";
jewel.libraryCardNum= librarian.registerCust();

console.log('Jewel', jewel)

