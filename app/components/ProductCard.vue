<template>
  <StackLayout id="card" @tap="goToProduct">
    <Image :src="product.image" stretch="aspectFill" />
    <GridLayout columns="*, *" rows="*">
      <Label textWrap="true" height="70" :text="product.name" row="0" col="0"/>
      <Label height="70" :text="'$'+product.price" row="0" col="1"/>
    </GridLayout>
    <Button id="Button" @tap="addToCart" text="Add to Cart"></Button>
  </StackLayout>
</template>

<script>
import Product from './Product.vue'

export default {
  props: {
    product: {}
  },
  methods: {
    goToProduct() {
      this.$navigateTo(Product, {
        props: {
          productId: this.product.id,
        }
      })
    },
    addToCart() {
      this.$store.commit('updateCart', this.product)
      alert({
        title: "Added to cart",
        okButtonText: "OK"
      }).then(() => {
        console.log("Alert dialog closed");
      });
    }
  }
}
</script>

<style scoped>
  #card {
    margin: 20;
    margin-bottom: 10;
    margin-top: 10;
    border-style: solid;
    border-color: black;
    border-width: 1;
    border-radius: 10;
    background-color: #58b368;
  }
  Label {
    text-align: center;
    background-color: #58b368;
  }
  Image {
    object-fit: cover;
    height: 340;
    width: 340;
    background-color: white;
  }
  GridLayout {
    border-top-width: 1;
    border-top-color: black;
    border-top-style: solid;
  }
  Button {
    background-color: #009975;
    color: white;
    font-size: 20;
    font-weight: bold;
    margin: 10;
    margin-top: 0;
    padding: 10;
    border-style: solid;
    border-color: black;
    border-width: 1;
    border-radius: 10;
  }
</style>
