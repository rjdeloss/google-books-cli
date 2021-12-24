#! /usr/bin/env node
import yargs from "yargs"

const intro = "\nGoogle Books CLI is a command line application that uses the Google Books API to search for books and create a reading list"
const options = yargs(process.argv.slice(2)).usage(intro)
    .option({
        "search": {
            alias: "search",
            describe: "search for books",
            type: "string",
            demandOption: true
        }
    }).help().argv

console.log('First CLI')