
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <StackLayout>
            <Button @tap="goToCart" text="Cart"></Button>
            <Button @tap="goToCheckout" text="Checkout"></Button>
            <Button @tap="goToProduct" text="Product"></Button>
        </StackLayout>
    </Page>
</template>
<script>
<<<<<<< HEAD
  import cart from './Cart.vue'
  import product from './Product.vue'
  import checkout from './Checkout.vue'


  export default {
    data() {
      return {
        Cart: cart,
        msg: 'Hello world!!'
      }
=======
import Cart from './Cart.vue';
import Checkout from './Checkout.vue';
import Product from './Product.vue';

export default {
    data () {
        return {
        };
    },
    methods: {
        goToCart() {
            this.$navigateTo(Cart)
        },
        goToCheckout() {
            this.$navigateTo(Checkout)
        },
        goToProduct() {
            this.$navigateTo(Product)
        }
>>>>>>> 852d913dde89f1dc70cb3a5284f76e18a39c0979
    }
}
</script>

<style scoped>
</style>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
