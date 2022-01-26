const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpuctures.com',
    'myfavouritescats.com',
    'myfavouritescats1.com',
    'myfavouritescats2.com',
];


const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput)
    });
    return matches.length > 3 ? matches.slice(0,3) : matches;
};

console.log(googleSearch('cats', googleDatabase));

module.exports = googleSearch;

// node script.js  - запустить файл