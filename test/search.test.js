import fs from "fs";
import { assert } from "chai";

import { fetchBooks } from "../utils/search.js";

const storageFile = "storage.json";

describe("Search Functionality", () => {
    const keyword = "skydiving";

    describe("testing fetchBooks function", () => {
        it("should take in a string as a parameter", () => {
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
    })
})