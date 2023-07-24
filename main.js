class ProductManager {
    constructor(){
        this.products = []
        this.nextId = 1
    }

    addProducts (product){
        if(!this.isProductValid(product)){
            console.log("Producto no válido")
            return
        }
        if(this.codeDuplicated(product.code)){
            console.log("El código ya existe.")
            return
        }

        product.id = this.nextId++
        this.products.push(product)
    
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const product = this.products.find((p)=> p.id === id)
        if(product){
            return product
        }
        else{
            console.log("El producto no existe.")
        }
    }

    isProductValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    codeDuplicated(code){
        return this.products.some((p)=> p.code === code)
    }
   

}

//instancia de product manager
const productManager = new ProductManager()

// Agregar productos

productManager.addProducts({
    title: "Producto 1",
    description:"Descripción del primer producto.",
    price :20,
    thumbnail :"https://via.placeholder.com/50x50?text",
    code: 1,
    stock:34,
})

productManager.addProducts({
    title: "Producto 2",
    description:"Descripción del segundo producto.",
    price :30,
    thumbnail :"https://via.placeholder2.com/50x50?text",
    code: 2,
    stock:31,
})

productManager.addProducts({
    title: "Producto 3",
    description:"Descripción del segundo producto.",
    price :60,
    thumbnail :"https://via.placeholder2.com/50x50?text",
    code: 3,
    stock:123,
})

const productList = productManager.getProducts()
console.log(productList)

