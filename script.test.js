const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'cheese.com',
    'cats.com',
    'dogpictures.com'
]

describe('googleSearch', () => {
    it('is silly test', () => {
        expect('hello').toBe('hello');
    });
    
    it('is searchig google', () => {
        expect(googleSearch('test', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com']);
    });
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});