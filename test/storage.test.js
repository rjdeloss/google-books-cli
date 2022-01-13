import fs from "fs"
import { assert } from "chai";
import { createStorage, readStorageData, writeStorageData } from "../utils/storage.js";

describe('File Storage Functionality', () => {
    describe("test createStorage function", () => {
        createStorage()
        it("should create a storage file if there is no storage file with the name 'storage.json'", () => {
            assert.equal(fs.existsSync("storage.json"), true, 'storage.json file exists in directory')
        })
    })

    describe("test readStorage function", () => {
        it("should contain key of 'currentSearch'", () => {
            const data = readStorageData()
            assert.include(Object.keys(data),'currentSearch')
        })
        it("should contain key of 'list'", () => {
            const data = readStorageData()
            assert.include(Object.keys(data),'list')
        })
    })

    describe("test writeStorageData function", () => {
        const data = readStorageData()
        const baseballSearch = {
            "0": {
            "id": "_Z_LDwAAQBAJ",
            "title": "The Baseball Book of Why",
            "authors": [
                "John McCollister"
            ],
            "publisher": "Rowman & Littlefield"
            },
            "1": {
            "id": "51PS5G2Y2a4C",
            "title": "Baseball Hacks",
            "authors": [
                "Joseph Adler"
            ],
            "publisher": "\"O'Reilly Media, Inc.\""
            },
            "2": {
            "id": "U8JvDwAAQBAJ",
            "title": "Baseball",
            "authors": [
                "Ron Martriano"
            ],
            "publisher": "Charlesbridge Publishing"
            },
            "3": {
            "id": "ssAPTAgCKb8C",
            "title": "The Book",
            "authors": "no author",
            "publisher": "Potomac Books, Inc."
            },
            "4": {
            "id": "gds3mX1B_qcC",
            "title": "Baseball in April and Other Stories",
            "authors": [
                "Gary Soto"
            ],
            "publisher": "Houghton Mifflin Harcourt"
            }
        }
        data.currentSearch = baseballSearch
        writeStorageData(data)
        // const storageData = readStorageData()
        // console.log(storageData)
        it("should save data to file", () => {
            // console.log(data)
            assert.equal(data.currentSearch[1].id, '51PS5G2Y2a4C')
        }) 
    })

})