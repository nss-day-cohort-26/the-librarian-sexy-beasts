const librarian = {
    registerCust: function() {
        let registerCust = 
        Math.floor(Math.random()*10000000) +1
        return registerCust
    }
}

console.log('library card', librarian.registerCust())