import fs from 'fs'
import { assert, expect } from "chai";
import Sinon from "sinon";

import { createStorage, readStorageData, writeStorageData } from "../utils/storage.js";
import { saveToListByOrder, renderList } from "../utils/list.js";


describe("List Functionality", () => {
    const dummyStorage = fs.readFileSync('./test/dummyStorage.json', 'utf8')
    const dummyData = JSON.parse(dummyStorage)
    createStorage()
    writeStorageData(dummyData)
    // const data = readStorageData()
    describe("storage should exist before accessing list", () => {
        it("should check if storage exsist", () => {
            assert.equal(fs.existsSync("storage.json"), true, 'storage.json file exists in directory')
        })
    })

    describe("test renderList function", () => {
        beforeEach(() => {
            Sinon.stub(console, 'log');
        });
        afterEach(() => {
            console.log.restore()
        })

        it("should throw an error if there are no books in the list", () => {
            renderList()
            expect(console.log.calledWith("Oops... There are currently no saved books in your list.")).to.be.true;
        })
        // it("should display the books saved in the list", () => { //     const book = `{ //         "id": "eZtyDwAAQBAJ", //         "title": "Pout-Pout Fish: Back to School", //         "authors": [ //             "Deborah Diesen" //         ], //         "publisher": "Farrar, Straus and Giroux (BYR)" //     }` //     saveToListByOrder({ Order: '3' }) //     renderList() //     expect(console.log.calledWidth(book)).to.be.true; // })

    })

    describe("test saveToListByOrder function", () => {
        beforeEach(() => {
            Sinon.stub(console, 'log');
        });
        afterEach(() => {
            console.log.restore()
        })
        it("should throw an error if no options are given", () => {
            saveToListByOrder({})
            expect(console.log.calledWith("Oops... seems like you're missing options. use '-o <order>' or '-order <order>' ")).to.be.true;
        })
        it("should throw an error if the order number is less than 0", () => {
            saveToListByOrder({Order: '-1'})
            expect(console.log.calledWith("Something went wrong... please select an Order number between 0 and 4")).to.be.true;
        })
        it("should throw an error if the order number is greater than 4", () => {
            saveToListByOrder({Order: '5'})
            expect(console.log.calledWith("Something went wrong... please select an Order number between 0 and 4")).to.be.true;
        })
        it("should add book to list if order number is between 0 and 4", () => {
            saveToListByOrder({Order: '3'})
            expect(console.log.calledWith("Book has been saved to your list")).to.be.true;
        })
    })
    
})