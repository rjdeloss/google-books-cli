import fs from 'fs';
const storageFile = "storage.json"

const createStorage = () => {
    try {
        if (!fs.existsSync(storageFile)) {
            const storageObj = {
                currentSearch: null,
                list: []
            }
            
            fs.writeFile('storage.json', JSON.stringify(storageObj, null, 2), (err) => {
                if (err) throw err;
                console.log("storage created")
            })
        } 
    } catch (err) {
        console.log(err)
    }
}

const saveCurrentSearch = (data) => {
    const storage = fs.readFileSync(storageFile, "utf8")
    const storageData = JSON.parse(storage)

    storageData.currentSearch = data;

    fs.writeFile(storageFile, JSON.stringify(storageData, null, 2), err => {
        if (err) throw err;
    })
}

const saveToListByOrder = (order) => {
    const storage = fs.readFileSync(storageFile, "utf8")
    const storageData = JSON.parse(storage)
    const { currentSearch, list } = storageData

    if (order < 0 || order > 4) {
        console.log("Something went wrong... please select an order number between 0 and 4");
    } else {
        if (list.length === 0) {
            list.push(currentSearch[order])
            
            fs.writeFile(storageFile, JSON.stringify(storageData, null, 2), err => {
                if (err) throw err;
                console.log("Book has been saved to your list")
            })
        } else {
            for (let book of list) {
                if (book.id === currentSearch[order].id) {
                    console.log("Book already exists in your list.")
                } else {
                    list.push(currentSearch[order])
                
                    fs.writeFile(storageFile, JSON.stringify(storageData, null, 2), err => {
                        if (err) throw err;
                        console.log("Book has been saved to your list")
                    })
                }
            }
        }
    }
}

const renderList = () => {
    const storage = fs.readFileSync(storageFile, "utf8")
    const storageData = JSON.parse(storage)

    if (storageData.list.length === 0) {
        console.log("Oops... There are currently no saved books in your list.")
    } else {
        storageData.list.forEach(book => console.log(book))
    }
}


export {createStorage, saveCurrentSearch, saveToListByOrder, renderList}