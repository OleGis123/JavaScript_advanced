const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title = 'Название товара', price = 'Цена товара') => // убрали ковычки
   `<div class="product-item">
      <h3>${title}</h3>
      <p>${price}</p>
    </div>`

// возвращает строку с объединением в пустую строку
const renderProducts = goodsList => document.querySelector('.products').innerHTML = goodsList.map(good => renderProduct(good.title, good.price)).join('')
 
renderProducts(products);
