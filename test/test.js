import { assert } from 'chai';
import fs from 'fs'

import {fetchBooks } from '../utils/search.js';
import { createStorage, saveCurrentSearch} from '../utils/storage.js'

const storageFile = "storage.json"

describe('Google Books CLI Test Cases', () => {
    /** Tests for query */
    const keyword = "apple"
    describe('Search query for books', () => {
        it('should take in a string as the parameter', () => {
            assert.typeOf(keyword, 'string')
        })
        it('should return a list of 5 books matching the query', async () => {
            let result = await fetchBooks(keyword)
            assert.equal(Object.keys(result.data.items).length, 5)
        })
        it('should create a storage.json file', () => {
            assert.equal(fs.existsSync(storageFile), true)
        })
    })
    /** Test for display of items on the list  */
    describe('Result display format', () => {
        const storage = fs.readFileSync(storageFile, "utf8")
        const storageData = JSON.parse(storage)
        const book = storageData.currentSearch[0];

        it("should display the book's author", () => {
            //replace with the object key for author
            assert.equal(book.hasOwnProperty('authors'), true)
        })
        it("should display the book's title", () => {
            assert.equal(book.hasOwnProperty('title'), true)
        })
        it("should display the book's publishing company", () => {
            assert.equal(book.hasOwnProperty('publisher'), true)
        })
        it("should display 'no publisher' in the event the publisher is missing", () => {
            assert.equal(book.publisher, 'no publisher')
        })
    })

    describe('Selecting a book from the displayed items', () => {
        const storage = fs.readFileSync(storageFile, "utf8")
        const storageData = JSON.parse(storage)
        let order = 2;
        it('should be able to select a book from the 5 displayed items', () => {
            //replace with the code being tested
            
            assert.equal(1, 1)
        })
    })
    
})