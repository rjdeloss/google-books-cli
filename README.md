# google-books-cli

Welcome! This is a command line application that uses the Google Books API to search for books and create a reading list. It renders 5 of the most relevant books based on your keyword(s) search and can save books locally onto your reading list based on the order of the search. 


## Getting Started

prerequisite: [NodeJS](https://nodejs.org/) must be installed onto your computer. 

1. Clone this repository 
2. Navigate to the directory saved on your computer on your terminal. 
3. Execute `npm install` to install all of the project's dependencies. 
4. Run `npm run google-books`

### Uninstall CLI Application 
Once you're done using it and no longer would like app on your computer, simply run `npm uninstall google-books` in teh file directory and the cli application will be uninstalled from your machine. 

## `npm run google-books` CLI Commands

In order to run any of the commands aside from testing, After installing the npm packages for the project, the application runs by writing `npm run google-books [command]`

- `npm run google-books` gives a breif description of the application along with a list of all the commands

- `search <keyword>` takes in a `"string"` as a keyword(s) searches the Google Books API for the 5 most relevant books based on the keyword and displays their id, title, author, and publisher. Please note that the string must be wrapped in qoutes. 

- `save -o <order>` takes in a `number` from 0-4 based on the order of search results and saves them onto your reading list. 

- `list` displays all of the books saved onto your local reading list. 

## Run Test Cases

run `npm test` to run the test cases for this project

## Final Thoughts

This was an interesting project since it was a first working with `bin` to execute my own cli application via the terminal.

One of the greater challenges of this project was figuring a workaround of caching the search results so that they can be used to add books onto the reading list. I thought of creating global variables to store the current search result and the local list but it was a futile attempt because of the way `commander` npm package was written. I learned the package used IIFE (Immediately Invoked Function Expression) which is a design pattern used to aviod polluting the global namespace. 

To work around this, I resorted to creating a local JSON file in order to cache the current search result and also save books onto the reading list. Although I never figured out how to break the pattern and force the package to allow global variables, It is a topic I am interested in researching more in depth. 