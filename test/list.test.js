import { assert, expect } from "chai";
import Sinon from "sinon";

import { createStorage, readStorageData } from "../utils/storage.js";
import { saveToListByOrder, renderList } from "../utils/list.js";

describe("List Functionality", () => {
    describe("storage should exist before accessing list", () => {
        createStorage()
    
        it("should check if storage exsist", () => {
            const data = readStorageData()
            assert.include(Object.keys(data),'list')
        })
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
    describe("test renderList function", () => {
        it("should throw an error if there are no books in the list", () => {

            expect()
        })

    })
})