import data from './data.js'

// main from html file
let main = document.querySelector('main');

//categories from the html
const men = document.getElementById('Men')
const women = document.getElementById('Women')
const jewelery = document.getElementById('Jewelery')
const electronics = document.getElementById('Electronics')
const allProducts = document.getElementById('All Products')

//icon plus '+' to add new product
const addProduct = document.querySelector('#plus-button')
const goHome = document.querySelector('#home-button')

// icons from html, of the search
const iconSerch = document.querySelector('#iconSerch')
const serch = document.querySelector('#serch')

//searce product
iconSerch.addEventListener('click', () => {
    main.replaceChildren()
    data.forEach((element) => {
        if (element.title.includes(serch.value)){
            cards(element)
            
        }
    });
    serch.value = ''
})

//run hover the data of products
data.forEach((element) => {
    cards(element)
})

//the button that return to the home page
goHome.addEventListener('click', () =>{
    location.reload();
})

//the button that send to the add product page
addProduct.addEventListener('click', () => {
    main.replaceChildren()
    const nav = document.getElementById('nav')
    nav.remove()
    main.style.display = 'flex'
    main.style.flexDirection = 'column'

    const divUp = document.createElement('div')
    main.appendChild(divUp)
    divUp.style.display = 'flex'
    divUp.style.alignItems = 'center'
    divUp.style.justifyContent = 'center'
    
    const backHome = document.createElement('div')
    backHome.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'
    backHome.style.cursor = 'pointer'
    divUp.appendChild(backHome)
    backHome.addEventListener('click', () => {
        location.reload()
    })
    
    const h1 = document.createElement('h1')
    divUp.appendChild(h1)
    h1.textContent = 'Add New Product'
    h1.style.margin = '0 500px 0 500px'

    const divInput = document.createElement('div')
    main.appendChild(divInput)
    divInput.style.alignSelf = 'center'
    divInput.style.width = '600px'
    divInput.style.height = '350px'
    divInput.style.marginTop = '25px'
    divInput.style.marginBottom = '14vh'
    
    const title = document.createElement('h4')
    title.textContent = 'Title'
    title.style.marginTop = '10px'
    divInput.appendChild(title)

    const titleInput = document.createElement('input')
    divInput.appendChild(titleInput)
    titleInput.style.background = 'white'
    titleInput.style.width = '100%'
    titleInput.style.height = '25px'
    titleInput.placeholder = 'Add Title'
    titleInput.style.alignSelf = 'center'

    const category = document.createElement('h4')
    category.textContent = 'Category'
    category.style.marginTop = '10px'
    divInput.appendChild(category)

    const categoryInput = document.createElement('input')
    divInput.appendChild(categoryInput)
    categoryInput.style.background = 'white'
    categoryInput.style.width = '100%'
    categoryInput.style.height = '25px'
    categoryInput.placeholder = 'Add Category'
    categoryInput.style.alignSelf = 'center'

    const price = document.createElement('h4')
    price.textContent = 'Price'
    price.style.marginTop = '10px'
    divInput.appendChild(price)

    const priceInput = document.createElement('input')
    divInput.appendChild(priceInput)
    priceInput.style.background = 'white'
    priceInput.style.width = '100%'
    priceInput.style.height = '25px'
    priceInput.placeholder = 'Add Price'
    priceInput.style.alignSelf = 'center'

    const image = document.createElement('h4')
    image.textContent = 'Image URL'
    image.style.marginTop = '10px'
    divInput.appendChild(image)

    const imageInput = document.createElement('input')
    divInput.appendChild(imageInput)
    imageInput.style.background = 'white'
    imageInput.style.width = '100%'
    imageInput.style.height = '25px'
    imageInput.placeholder = 'Add Image URL'
    imageInput.style.alignSelf = 'center'

    const quantity = document.createElement('h4')
    quantity.textContent = 'Quantity'
    quantity.style.marginTop = '10px'
    divInput.appendChild(quantity)

    const quantityInput = document.createElement('input')
    divInput.appendChild(quantityInput)
    quantityInput.style.background = 'white'
    quantityInput.style.width = '100%'
    quantityInput.style.height = '25px'
    quantityInput.placeholder = 'Add Quantity'
    quantityInput.style.alignSelf = 'center'

    const description = document.createElement('h4')
    description.textContent = 'Description'
    description.style.marginTop = '10px'
    divInput.appendChild(description)

    const descriptionInput = document.createElement('input')
    divInput.appendChild(descriptionInput)
    descriptionInput.style.background = 'white'
    descriptionInput.style.width = '100%'
    descriptionInput.style.height = '60px'
    descriptionInput.placeholder = 'Add Description'

    const buttonSend = document.createElement('button')
    buttonSend.textContent = 'ADD'
    buttonSend.style.background = '#ffdecb'
    buttonSend.style.width = '70px'
    buttonSend.style.height = '30px'
    buttonSend.style.marginTop = '10px'
    divInput.appendChild(buttonSend)

    buttonSend.addEventListener('click', () => {
        data.push({
            id: data.length + 1,
            title: titleInput.value,
            price: priceInput.value,
            description: descriptionInput.value,
            category: categoryInput.value,
            image: imageInput.value
        })
        console.log(data)
    })


})

//men's category button
men.addEventListener('click', () => {
    main.replaceChildren()
    category("men's clothing")
    men.style.background = '#ffdecb'
    women.style.background = '#FFBF9B'
    jewelery.style.background = '#FFBF9B'
    electronics.style.background = '#FFBF9B'
    allProducts.style.background = '#FFBF9B'
})

//women's category button
women.addEventListener('click', () => {
    main.replaceChildren()
    category("women's clothing")
    men.style.background = '#FFBF9B'
    women.style.background = '#ffdecb'
    jewelery.style.background = '#FFBF9B'
    electronics.style.background = '#FFBF9B'
    allProducts.style.background = '#FFBF9B'
})

//jewlery category button
jewelery.addEventListener('click', () => {
    main.replaceChildren()
    category("jewelery")
    men.style.background = '#FFBF9B'
    women.style.background = '#FFBF9B'
    jewelery.style.background = '#ffdecb'
    electronics.style.background = '#FFBF9B'
    allProducts.style.background = '#FFBF9B'
})

//electronics category button
electronics.addEventListener('click', () => {
    main.replaceChildren()
    category("electronics")
    men.style.background = '#FFBF9B'
    women.style.background = '#FFBF9B'
    jewelery.style.background = '#FFBF9B'
    electronics.style.background = '#ffdecb'
    allProducts.style.background = '#FFBF9B'
})

//all products button
allProducts.addEventListener('click', () => {
    main.replaceChildren()
    data.forEach(element => {
        cards(element)
    });
    men.style.background = '#FFBF9B'
    women.style.background = '#FFBF9B'
    jewelery.style.background = '#FFBF9B'
    electronics.style.background = '#FFBF9B'
    allProducts.style.background = '#ffdecb'
})

//the function return the spacific category
function category(categoryName){
    main.replaceChildren()
    data.forEach(element => {
        if (categoryName === element.category){
            cards(element)
        }
    });
}

//the function create products cards
function cards(element){
    const productCard = document.createElement('div');
    productCard.style.width = '200px'
    productCard.style.height = '360px'
    productCard.style.border = '2px solid black'
    productCard.style.borderRadius = '10px'
    productCard.style.display = 'flex'
    productCard.style.alignItems = 'center'
    productCard.style.flexDirection = 'column'
    productCard.style.margin = '20px'
    productCard.style.background = 'white'
    
    const productImage = document.createElement('img')
    productCard.appendChild(productImage)
    productImage.style.height = '50%'
    productImage.style.width = '80%'
    productImage.src = element.image
    productImage.style.marginTop = '10px'
    productImage.addEventListener('click', () => {
        const nav = document.getElementById('nav')
        nav.remove()
        main.replaceChildren()
        prductPage(element.id)
        
    })

    const bottomCard = document.createElement('div')
    productCard.appendChild(bottomCard)
    bottomCard.style.background = '#ffdecb'
    bottomCard.style.height = '100%'
    bottomCard.style.width = '100%'
    bottomCard.style.marginTop = '10px'
    bottomCard.style.borderRadius = '0 0 10px 10px'

    const titleCard = document.createElement('h4')
    bottomCard.appendChild(titleCard)
    titleCard.textContent = element.title
    titleCard.style.margin = '10px'
    
    const lineBetween = document.createElement('div')
    bottomCard.appendChild(lineBetween)
    lineBetween.style.height = '2px'
    lineBetween.style.width = '80%'
    lineBetween.style.background = '#7c7b7b'
    lineBetween.style.margin = '10px'
    
    const edidDelete = document.createElement('div')
    bottomCard.appendChild(edidDelete)
    edidDelete.style.display = 'flex'
    edidDelete.style.justifyContent = 'start'
    edidDelete.style.alignItems = 'center'
    
    const bin = document.createElement('span')
    edidDelete.appendChild(bin)
    bin.id = 'bin'
    bin.innerHTML = '<i class="fa-solid fa-trash"></i>'
    bin.style.margin = '10px'
    bin.classList = 'editDelete'
    bin.addEventListener('click', () => {
        productCard.remove()
        for(let i = 0; i < data.length; i++) {
                if (element === data[i]){
                    delete data[i] 
                    console.log(data)
                }
            };
        })
    
    const edit = document.createElement('span')
    edidDelete.appendChild(edit)
    edit.innerHTML = '<i class="fa-solid fa-pen"></i>'
    edit.classList = 'editDelete'
    edit.addEventListener('click', () => {
        const nav = document.getElementById('nav')
        nav.remove()
        main.replaceChildren()
        editCard(element.id)
    })

    main.appendChild(productCard);
}   

//create product page
function prductPage(idElement){
    let shwoElement;
    data.forEach((elem) => {
        if (elem.id === idElement){
            shwoElement = elem
            return
        }
    })

    const divTitle = document.createElement('div')
    main.appendChild(divTitle)
    divTitle.style.marginTop = '20px'
    divTitle.style.marginBottom = '20px'

    main.style.display = 'flex'
    main.style.flexDirection = 'column'



    const h1 = document.createElement('h1')
    divTitle.appendChild(h1)
    h1.textContent = 'Product Page'
    h1.style.textAlign = 'center'

    const product = document.createElement('div')
    main.appendChild(product)
    product.style.border = '2px black solid'
    product.style.borderRadius = '10px'
    product.style.width = '600px'
    product.style.alignSelf = 'center'
    product.style.display = 'flex'

   
    const divImage = document.createElement('div')
    divImage.style.background = 'white'
    divImage.style.width = '50%'
    divImage.style.borderRadius = '10px 0 0 10px'
    product.appendChild(divImage)
    
    const productImage = document.createElement('img')
    divImage.appendChild(productImage)
    productImage.style.width = '100%'
    productImage.style.height = '100%'
    productImage.src = shwoElement.image
    productImage.style.padding = '40px'

    const productDetails = document.createElement('div')
    product.appendChild(productDetails)
    productDetails.style.background = 'none'
    productDetails.style.width = '50%'
    productDetails.style.padding = '10px'

    const productDetailsTitle = document.createElement('h4')
    productDetails.appendChild(productDetailsTitle)
    productDetailsTitle.textContent = 'Title'

    const productDetailsTitleText = document.createElement('p')
    productDetails.appendChild(productDetailsTitleText)
    productDetailsTitleText.textContent = shwoElement.title
    productDetailsTitleText.style.marginTop = '6px'

    const description = document.createElement('h4')
    productDetails.appendChild(description)
    description.textContent = 'Description'
    description.style.marginTop = '6px'

    const descriptionContent = document.createElement('p')
    productDetails.appendChild(descriptionContent)
    descriptionContent.textContent = shwoElement.description
    descriptionContent.style.marginTop = '6px'

    const category = document.createElement('h4')
    productDetails.appendChild(category)
    category.textContent = 'Category'
    category.style.marginTop = '6px'

    const categoryContent = document.createElement('p')
    productDetails.appendChild(categoryContent)
    categoryContent.textContent = shwoElement.category
    categoryContent.style.marginTop = '6px'

    const price = document.createElement('h4')
    productDetails.appendChild(price)
    price.textContent = 'Price'
    price.style.marginTop = '6px'

    const priceContent = document.createElement('p')
    productDetails.appendChild(priceContent)
    priceContent.textContent = shwoElement.price
    priceContent.style.marginTop = '6px'

    const quantity = document.createElement('h4')
    productDetails.appendChild(quantity)
    quantity.textContent = 'Quantity'
    quantity.style.marginTop = '6px'

    const quantityContent = document.createElement('p')
    productDetails.appendChild(quantityContent)
    quantityContent.textContent = '23'
    quantityContent.style.marginTop = '6px'
}

//edit product page
function editCard(IdElement){ 

    main.style.display = 'flex'
    main.style.flexDirection = 'column'

    const divUp = document.createElement('div')
    main.appendChild(divUp)
    divUp.style.display = 'flex'
    divUp.style.alignItems = 'center'
    divUp.style.justifyContent = 'center'
    
    const backHome = document.createElement('div')
    backHome.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'
    backHome.style.cursor = 'pointer'
    divUp.appendChild(backHome)
    backHome.addEventListener('click', () => {
        location.reload()
    })
    
    const h1 = document.createElement('h1')
    divUp.appendChild(h1)
    h1.textContent = 'Edit Product'
    h1.style.margin = '0 500px 0 500px'

    const divInput = document.createElement('div')
    main.appendChild(divInput)
    divInput.style.alignSelf = 'center'
    divInput.style.width = '600px'
    divInput.style.height = '350px'
    divInput.style.marginTop = '25px'
    divInput.style.marginBottom = '14vh'
    
    const title = document.createElement('h4')
    title.textContent = 'Title'
    title.style.marginTop = '10px'
    divInput.appendChild(title)

    const titleInput = document.createElement('input')
    divInput.appendChild(titleInput)
    titleInput.style.background = 'white'
    titleInput.style.width = '100%'
    titleInput.style.height = '25px'
    titleInput.placeholder = 'Edit Title'
    titleInput.style.alignSelf = 'center'

    const category = document.createElement('h4')
    category.textContent = 'Category'
    category.style.marginTop = '10px'
    divInput.appendChild(category)

    const categoryInput = document.createElement('input')
    divInput.appendChild(categoryInput)
    categoryInput.style.background = 'white'
    categoryInput.style.width = '100%'
    categoryInput.style.height = '25px'
    categoryInput.placeholder = 'Edit Category'
    categoryInput.style.alignSelf = 'center'

    const price = document.createElement('h4')
    price.textContent = 'Price'
    price.style.marginTop = '10px'
    divInput.appendChild(price)

    const priceInput = document.createElement('input')
    divInput.appendChild(priceInput)
    priceInput.style.background = 'white'
    priceInput.style.width = '100%'
    priceInput.style.height = '25px'
    priceInput.placeholder = 'Edit Price'
    priceInput.style.alignSelf = 'center'

    const image = document.createElement('h4')
    image.textContent = 'Image URL'
    image.style.marginTop = '10px'
    divInput.appendChild(image)

    const imageInput = document.createElement('input')
    divInput.appendChild(imageInput)
    imageInput.style.background = 'white'
    imageInput.style.width = '100%'
    imageInput.style.height = '25px'
    imageInput.placeholder = 'Edit Image URL'
    imageInput.style.alignSelf = 'center'

    const quantity = document.createElement('h4')
    quantity.textContent = 'Quantity'
    quantity.style.marginTop = '10px'
    divInput.appendChild(quantity)

    const quantityInput = document.createElement('input')
    divInput.appendChild(quantityInput)
    quantityInput.style.background = 'white'
    quantityInput.style.width = '100%'
    quantityInput.style.height = '25px'
    quantityInput.placeholder = 'Edit Quantity'
    quantityInput.style.alignSelf = 'center'

    const description = document.createElement('h4')
    description.textContent = 'Description'
    description.style.marginTop = '10px'
    divInput.appendChild(description)

    const descriptionInput = document.createElement('input')
    divInput.appendChild(descriptionInput)
    descriptionInput.style.background = 'white'
    descriptionInput.style.width = '100%'
    descriptionInput.style.height = '60px'
    descriptionInput.placeholder = 'Edit Description'

    const buttonSend = document.createElement('button')
    buttonSend.textContent = 'EDIT'
    buttonSend.style.background = '#ffdecb'
    buttonSend.style.width = '70px'
    buttonSend.style.height = '30px'
    buttonSend.style.marginTop = '10px'
    divInput.appendChild(buttonSend)

    buttonSend.addEventListener('click', () => {
        data.forEach((element) => {
            if (element.id === IdElement){
                element.title = titleInput.value,
                element.price = priceInput.value,
                element.description = descriptionInput.value,
                element.category = categoryInput.value,
                element.image = imageInput.value
            }
        });
        console.log(data)
    })

}