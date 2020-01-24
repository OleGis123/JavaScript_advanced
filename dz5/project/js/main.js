const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    cartCatalog: [],
    searchLine: '',
    filterProducts: [],
    showCart: false
  },
  methods: {
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
    addProduct(product) {
        const newProduct = this.cartCatalog.find((el) =>{
            if (el.id_product === product.id_product){
                return product
            }
        });
        if(newProduct){
            newProduct.quantity++
        }else{
            product.quantity = 1;
            this.cartCatalog.push(product)
        }
    },
  filterGoods(searchText){
      const regExp = new RegExp(this.searchLine, 'i');
      this.filterProducts = this.products.filter(el => regExp.test(el.product_name));
  }
  },
  mounted() {
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for (let el of data) {
            this.products.push(el);
            this.filterProducts.push(el);
          }
        });
  }
});
