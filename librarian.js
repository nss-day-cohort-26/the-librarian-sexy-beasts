const librarian = {
    registerCust: function() {
        let registerCust = 
        Math.floor(Math.random()*10000000) +1
        return registerCust
    },
    genreInfo: function() {
        for (let i=0; i<libraryDB.length; i++) {
            console.log('libdb i', libraryDB[i]);
            
            if (libraryDB[i].Genre ===  'Mystery') {
                console.log(`${libraryDB[i].Title} is a mystery`);
            } else if (libraryDB[i].Genre ===  'Food') {
                console.log(`${libraryDB[i].Title} is a food`);
            } else if (libraryDB[i].Title === 'Family Life') {
                console.log(`${libraryDB[i].Title} is family life`);
            }
        }
    }
}
librarian.genreInfo()