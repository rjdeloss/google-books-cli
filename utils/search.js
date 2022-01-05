import axios from 'axios';
import {saveCurrentSearch} from './storage.js'


const fetchBooks = async (keyword) => {
    let sanitizedKeyword = encodeURI(keyword);
    try {
        if (keyword === '' || typeof keyword !== 'string' || keyword === undefined) {
            throw new Error('Oops. something is not right. Please enter a valid input.')
        }
        
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${sanitizedKeyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
        )

        return response;

    } catch (error) {
        console.error(error.message);
        return error;
    }
}

const searchBooks = async (keyword) => {
    const books = await fetchBooks(keyword)
    const searchObject = {}
    
    books.data.items.forEach((item, i) => {
        const  id  = item.id
        const { title, authors, publisher } = item.volumeInfo

        const book = {
            id, 
            title,
            authors: authors ? authors : "no author", 
            publisher 
        }

        searchObject[i] === undefined ? searchObject[i] = book : null
        console.log(`
            order: ${i}
            id: ${id}
            title: ${title}
            author: ${authors || "no author"}
            publisher: ${publisher}
        `)
    })
    saveCurrentSearch(searchObject)
    return searchObject
}

export {searchBooks}

