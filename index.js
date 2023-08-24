function getData (callback) {
    let data = 'empty'
    console.log('getting data')
    setTimeout(() => {
        data = 'importont data'
        callback(data)
    }, 1000);
}

getData((someData) =>{
    console.log(someData)
})