const getTheTitles = function(books) {
    // let titles = [];
    // for(const b of books){
    //     titles.push(b.title);
    // }
    // return titles;
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
