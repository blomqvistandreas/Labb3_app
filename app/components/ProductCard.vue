<template>
  <StackLayout id="card" @tap="goToProduct">
    <Image :src="product.image" stretch="aspectFill" />
    <GridLayout columns="*, *" rows="*">
      <Label textWrap="true" height="70" :text="product.name" row="0" col="0"/>
      <Label height="70" :text="product.price" row="0" col="1"/>
    </GridLayout>
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
    }
  }
}
</script>

<style lang="scss" scoped>
    $secondary: #009358;
    $primary: #53ba82;
    $third: #1c6b48;
    $white: rgb(246, 246, 246);
    $black: rgb(50, 50, 50);
    $background: #454d66;

  #card {
    margin: 20;
    border-style: solid;
    border-color: $black;
    border-width: 1;
    border-radius: 10;
  }
  Label {
    text-align: center;
    background-color: $secondary;
  }
  Image {
    object-fit: cover;
    height: 340;
    width: 340;
    background-color: $white;
  }
  GridLayout {
    border-top-width: 1;
    border-top-color: $black;
    border-top-style: solid;
  }
</style>
