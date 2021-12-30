#! /usr/bin/env node
import cli from "commander";
import { searchBooks } from "../utils/search.js";

var currentList = {};
var list = {}

cli.description('Google Books cli is a command line application that uses the Google Books API to search for books and create a reading list')
cli.name('google-books');
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

cli
    .command("search")
    .argument("<keyword>", "search for books")
    .description("Returns a list of 5 of the most relevant books based on keyword(s) searched.")
    .action((keyword, currentList) => {
        const currentSearch = searchBooks(keyword)
        currentList = currentSearch
        return currentSearch
    }) 

cli
    .command("save")
    .argument("[bookId]", "saves book based on book id")
    .description("Saves a book to your list of books.")
    // .action(saveBook)

cli
    .command("list")
    .description("Returns a list of all saved books.")
    .action((currentList) => console.log({currentList}))


cli.parse(process.argv);