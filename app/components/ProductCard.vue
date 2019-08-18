<template>
  <StackLayout id="card">
    <Image :src="product.image" stretch="aspectFill" />
    <GridLayout columns="*, *" rows="*">
      <Label textWrap="true" height="70" :text="product.name" row="0" col="0"/>
      <Label height="70" :text="product.price" row="0" col="1"/>
    </GridLayout>
  </StackLayout>
</template>

<script>
export default {
  computed: {
    productId() {
      return '/product/'+this.product.id
    },
    productImage() {
      return this.product.image
    },
  },
  props: {
    product: {}
  },
  methods: {
    addToCart() {
      this.$store.commit('updateCart', this.product)
    }
  }
}
</script>

<style scoped>
  #card {
    margin: 20;
    border-style: solid;
    border-color: black;
    border-width: 1;
    border-radius: 10;
  }
  Label {
    text-align: center;
    background-color: #58b368;
  }
  Image {
    object-fit: cover;
    height: 340;
    width: 340;
  }
  GridLayout {
    border-top-width: 1;
    border-top-color: black;
    border-top-style: solid;
  }
</style>
