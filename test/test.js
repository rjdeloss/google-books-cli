var assert = require('chai').assert;

describe('Google Books CLI Test Cases', () => {
    describe('Google Books API Key', () => {
        it('should be string', () => {
            // replace with api key
            assert.typeOf('key goes here', 'string')
        })
        it('should be passed into the http request', () => {
            // replace with api key
            assert.typeOf('key goes here', 'string')
        })
    })
    /** Tests for query */
    describe('Search query for books', () => {
        it('should take in a string as the parameter', () => {
            assert.typeOf('query string goes here', 'string')
        })
        it('should return a list of 5 books matching the query', () => {
            // replace with the response array length
            assert.lengthOf('fives', 5)
        })
    })
    /** Test for display of items on the list  */
    describe('Result display format', () => {
        it("should display the book's author", () => {
            //replace with the object key for author
            assert.equal('author', 'author')
        })
        it("should display the book's title", () => {
            //replace with the object key for title
            assert.equal('title', 'title')
        })
        it("should display the book's publishing company", () => {
            //replace with the object key for publishing company
            assert.equal('publishing company', 'publishing company')
        })
    })

    describe('Selecting a book from the displayed items', () => {
        it('should be able to select a book from the 5 displayed items', () => {
            //replace with the code being tested
            assert.equal(1,1)
        })
    })
})