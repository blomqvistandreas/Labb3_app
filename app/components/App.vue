<template>
    <Page class="page">
        <ActionBar title="YardSale" class="action-bar">
        </ActionBar>
        <GridLayout columns="*" rows="*, 90"> 
          <ScrollView row="0" col="0">
            <StackLayout id="backround">
              <product-card :product="product" v-for="product in products" :key="product.id"></product-card>
            </StackLayout>
          </ScrollView>
          <StackLayout row="1" col="0">
            <Button @tap="goToCart" text="Cart"></Button>
            <Button @tap="goToCheckout" text="Checkout"></Button>
            <Button @tap="goToProduct" text="Product"></Button>
          </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
import Cart from './Cart.vue';
import Checkout from './Checkout/PersonalDetails.vue';
import Product from './Product.vue';
import ProductCard from './ProductCard.vue'

export default {
    created() {
        this.getProductsFromDB(1)
    },
    components: {
      ProductCard
    },
    data () {
        return {
          activeTab: 0,
          activeLetter: 0,
          currentPage: 1,
          productsPerPage: 16,
          products: [],
          totalCount: 0
        };
    },
    methods: {
        getProductsFromDB(payload) {
          fetch('http://localhost:5000/api/products/?filter='+this.activeTab+'&letter='+this.activeLetter+'&page='+payload)
          .then(response => response.json())
          .then(result => {
            if(result.length === 0) {
              this.totalCount = 0
            }else {
              this.totalCount = result[0].full_count
            }
            this.products = result
          }).catch(error => {
              console.log(error.message)
          })
        },
        tabChanged() {
          this.currentPage = 1
          this.getProductsFromDB(this.currentPage)
        },
        pageChanged(payload) {
          this.getProductsFromDB(payload)
          //Scroll to top of grid
          window.scrollTo(0, 90)
        },
        goToCart() {
            this.$navigateTo(Cart)
        },
        goToCheckout() {
            this.$navigateTo(Checkout)
        },
        goToProduct() {
            this.$navigateTo(Product)
        }
    }
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    #backround {
      background-color: #454d66
    }
</style>
