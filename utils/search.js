import axios from 'axios';

const searchBooks = async (keyword) => {
    let sanitizedKeyword = encodeURI(keyword);
    try {
        if (keyword === '' || typeof keyword !== 'string' || keyword === undefined) {
            console.log('Oops. something is not right. Please enter a valid input.')
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


export {searchBooks}

