/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    customer: {
      fname: null,
      lname: null,
      mail: null,
      phone: null,
      address: null,
      zipCode: null,
      city: null,
      country: null
    },
    loggedIn: false,
    adress: 'localhost:4000' //'http://84.217.234.101:4000/'
  },
  getters: {
    getProductImage: product => {
      if(!product) {return}
      //return this.state.adress +'/uploads/' + product.image
      return "hello get image";
      //return (this.state.adress + '/uploads/1.png')
    },
    getCheckoutDetails() {
      return details
    },
  },

  mutations: {
    setProducts(state, products){
      state.products = products
    },
    setFilter(state, filter) {
      state.productFilter = filter
    },
    emptyCart(state) {
        state.cart = [];
        return;
    },
    removeItem(state, product) {
      for (let i = 0; i < state.cart.length; i+=1) {
        if(product.id === state.cart[i].id) {
          state.cart.splice(i, 1)
          return
        }
      }
    },
    decreseItemInCart(state, product) {

      //add quantity if allready in cart
      for (let i = 0; i < state.cart.length; i+= 1) {
        const cartProduct = state.cart[i];

        if(cartProduct.id === product.id) {

          if(state.cart[i].quantity > 1) {

            state.cart[i].quantity -=  1//product.quantity

            //update cart
            state.cart.push({})
            state.cart.pop()
            return
          } else {
            this.commit('removeItem', product)
            return
          }
        }
      }
    },
    updateCart(state, product) {
      if(!product.quantity) {
        product.quantity = 1
      }
      //add quantity if allready in cart
      for (let i = 0; i < state.cart.length; i+= 1) {
        const cartProduct = state.cart[i];

        if(cartProduct.id === product.id) {
          state.cart[i].quantity +=  1//product.quantity
          //update cart
          state.cart.push({})
          state.cart.pop()
          return
        }
      }
      //add product
      state.cart.push(product)
    }
  },
  // actions: {
  //   getProductsFromDB(context){
  //     fetch(this.state.adress +'api/products/'
  //     /*+context.state.productFilter.tab+'/'+context.state.productFilter.letter*/)
  //     .then(response => response.json())
  //     .then(result => {

  //       //TODO: testing with price multiplier
  //       result.forEach(product => {
  //         let multiplier = context.getters.priceMultiplier
  //         product.price *= multiplier
  //         product.price /= 10
  //         product.price = Math.round(product.price)
  //         product.price *= 10

  //         //console.log(product);

  //         //set image
  //         //product.image = 'src/assets/products/' +product.id +'.png'
  //       });

  //       //set store products
  //       context.commit('setProducts', result)
  //     }).catch(error => {
  //         console.log(error.message)
  //     })
  //   }
  //},
});
