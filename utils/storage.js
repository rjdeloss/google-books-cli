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

export {createStorage, readStorageData, writeStorageData, saveCurrentSearch, storageFile}