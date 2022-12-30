// CLASS PRODUCT

class ProductManager {
    
    #idCounter = 0;
  
    constructor() {
      this.products = []; 
    }

    addProduct(title, description, price, thumbnail, code, stock) {
      
      let existingProduct = this.products.find(p => p.code === code);

      if (existingProduct) {
        console.error('Este producto ya existe');
      }
  
      
      this.products.push({
        id: ++this.#idCounter,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {

      let product = this.products.find(p => p.id === id);
      if (!product) {
        console.error('No se ha encontrado un producto con este id');
      }
      return product;

    }
}
  

// NEW PRODUCTS

let productManager = new ProductManager();

productManager.addProduct('Producto 1', 'Descripción 1', 100, 'Imagen 1', 'abc123', 25);

console.log(productManager.getProducts()); 

 
try {
  productManager.addProduct('Producto 2', 'Descripción 2', 150, 'Imagen 2', 'abc123', 30);
} catch (error) {
  console.log(error.message); 
}


try {
  productManager.getProductById(3);
} catch (error) {
  console.log(error.message); 
}