import fs from 'fs';
const storageFile = "storage.json"

const createStorage = () => {
    try {
        if (!fs.existsSync(storageFile)) {
            const storageObj = {
                currentSearch: null,
                list: []
            }
            
            writeStorageData(storageObj)
            console.log("storage created")
        } 
    } catch (err) {
        console.log(err)
    }
}

const readStorageData = () => {
    const storage = fs.readFileSync(storageFile, "utf8")
    const storageData = JSON.parse(storage)

    return storageData
}

const writeStorageData = (data) => {
    fs.writeFile(storageFile, JSON.stringify(data, null, 2), err => {
        if (err) throw err;
    })
    console.log("data has been written")
}

const saveCurrentSearch = (data) => {
    const currentData = readStorageData()
    currentData.currentSearch = data;
    writeStorageData(currentData)
}

const saveToListByOrder = (order) => {
    if (Object.keys(order).length === 0) {
        console.log("Oops... seems like you're missing options. use '-o <order>' or '-order <order>' ")
        return;
    }

    const storageData = readStorageData()
    const {currentSearch, list} = storageData
    const { Order } = order

    if (Order >= 0 && Order < 5) {
        const bookFound = list.find(book => (book.id === currentSearch[Order].id))
        if (list.length === 0) {
            list.push(currentSearch[Order])
            writeStorageData(storageData)
            console.log("Book has been saved to your list")
        } else if (bookFound && bookFound.id === currentSearch[Order].id) {
            console.log("Book already exists in your list.")
        } else {
            list.push(currentSearch[Order])
            writeStorageData(storageData)
            console.log("Book has been saved to your list")
        }
    } else {
        console.log("Something went wrong... please select an Order number between 0 and 4");
    }
}

const renderList = () => {
    const storageData = readStorageData()
    const { list } = storageData
    
    list.length === 0 ? 
        console.log("Oops... There are currently no saved books in your list.") : 
        list.forEach(book => console.log(book))
}


export {createStorage, readStorageData, writeStorageData, saveCurrentSearch, storageFile}