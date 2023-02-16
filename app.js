

const getProduct = []
class ProductManager {
    static id = 0
    constructor(tittle, description, price, thumbnail, code, stock){
        this.tittle = tittle
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = 0
        }

    aumentarId(){
        this.id++
    }
    
    }

    const Product1 =  new ProductManager('producto prueba','Este es un producto de prueba','200','Sin imagen','255')

console.log(getProduct)
console.log(Product1)

