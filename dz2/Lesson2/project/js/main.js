class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.summ = 0; // итоговая цена всех товаров в каталоге (2-ое задание)
    this._fetchProducts();
    this._render();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 40000},
      {id: 2, title: 'Mouse', price: 1000},
      {id: 3, title: 'Keyboard', price: 2500},
      {id: 4, title: 'Gamepad', price: 1500},
    ];
  }

  _summProducts(){ // высчитывает итоговую сумму всех товаров в каталоге (2-ое задание)
    this.goods.forEach((item) => {
      this.summ += item.price
    })
    console.log(this.summ)
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

const list = new ProductList();


// Ниже 1-ое задание

class CartList  {
      constructor( newProduct/* получает продукт в виде объекта */, container = '.cart' /* получает блок с классом .cart*/){ 
          this.newProduct = newProduct;
          this.cartGoods = []; // все товары, которые добавлены в корзину 
          this.cartSumm = null; // итоговая цена всех товаров
          this.container = container
          this._render()
          this._cartSumm()
      }
      
      _cartSumm(){ // считает итоговую сумму товаров корзины

      }


      _render(){ // генерирует корзину с помощью цикла ForEach , который перебирает массив товаров
        // получает здесь сгенерированный товар с помощью _render в CartNewProduct и добавляет 
      }
}

class CartNewProduct {
      constructor(product /* получает товар по событию, которое произошло при клике на кнопку добавить у товара (событие как мне кажется должно быть добавлено в классе ProductItem ) */){
          this.newProduct = product
      }

      _checkNewProduct(){ // проверяет есть ли товар, который мы хотим добавить, в корзине с помощью some

      }


      _render(){ // генерирует html код товара с кол-вом +1 и добавляет его в корзину

      }
}

