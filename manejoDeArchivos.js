class ProductManager {
    constructor() {
      this.products = []; 
    }

    generateUniqueId() {

        let id = Math.random().toString(36).substr(2, 8);

        while (this.products.some(p => p.id === id)) {
          
          id = Math.random().toString(36).substr(2, 8);
        }
    
       
        return id;
      }

    addProduct(title, description, price, thumbnail, code, stock) {
    
    const id = this.generateUniqueId();

      this.products.push({
        id: id,
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

    updateProduct(id,title, description, price, thumbnail, code, stock) {
     
        this.products.push({
            id: id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
          });
      }

      deleteProduct(id) {
        
        this.products.splice(id, 1);
  }
  }
  



let productManager = new ProductManager();


productManager.addProduct('Producto 1', 'Descripción 1', 100, 'Imagen 1', 'abc123', 25);


productManager.updateProduct('Producto act', 'Descripción atualizada', 100, 'Imagen 1', 'abc123', 25);


productManager.deleteProduct();

console.log(productManager.getProducts()); 