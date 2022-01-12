#! /usr/bin/env node
import cli from "commander";
import { searchBooks } from "../utils/search.js";
import { createStorage } from "../utils/storage.js"
import { saveToListByOrder, renderList } from "../utils/list.js";

cli.description('Google Books cli is a command line application that uses the Google Books API to search for books and create a reading list')
cli.name('google-books');
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

cli
    .command("search")
    .argument("<keyword>", "search for books")
    .description("Returns a list of 5 of the most relevant books based on keyword(s) searched.")
    .action((keyword) => {
        const currentSearch = searchBooks(keyword)
        createStorage()
        return currentSearch
    }) 

cli
    .command("save")
    .option("-o, -order <order>", "saves book based on book order number in the search")
    .description("Saves a book to your list of books.")
    .action((order) => saveToListByOrder(order))

cli
    .command("list")
    .description("Returns a list of all saved books.")
    .action(() => renderList())

cli.parse(process.argv);