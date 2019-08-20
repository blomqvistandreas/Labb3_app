<template>
    <Page class="page">
        <ActionBar title="YardSale" class="action-bar">
        </ActionBar>
        <GridLayout columns="*" :rows="rows"> 
          <SegmentedBar row="0" col="0" v-model="activeTab" @selectedIndexChange="tabChanged" selectedBackgroundColor="#009975">
            <SegmentedBarItem title="All" />
            <SegmentedBarItem title="Popular" />
            <SegmentedBarItem title="A-Z" />
          </SegmentedBar>
          <ScrollView v-if="activeTab===2" orientation="horizontal" row="1" col="0">
            <SegmentedBar v-model="activeLetter" @selectedIndexChange="tabChanged" selectedBackgroundColor="#009975">
              <SegmentedBarItem title="A"/>
              <SegmentedBarItem title="B"/>
              <SegmentedBarItem title="C"/>
              <SegmentedBarItem title="D"/>
              <SegmentedBarItem title="E"/>
              <SegmentedBarItem title="F"/>
              <SegmentedBarItem title="G"/>
              <SegmentedBarItem title="H"/>
              <SegmentedBarItem title="I"/>
              <SegmentedBarItem title="J"/>
              <SegmentedBarItem title="K"/>
              <SegmentedBarItem title="L"/>
              <SegmentedBarItem title="M"/>
              <SegmentedBarItem title="N"/>
              <SegmentedBarItem title="O"/>
              <SegmentedBarItem title="P"/>
              <SegmentedBarItem title="Q"/>
              <SegmentedBarItem title="R"/>
              <SegmentedBarItem title="S"/>
              <SegmentedBarItem title="T"/>
              <SegmentedBarItem title="U"/>
              <SegmentedBarItem title="V"/>
              <SegmentedBarItem title="W"/>
              <SegmentedBarItem title="X"/>
              <SegmentedBarItem title="Y"/>
              <SegmentedBarItem title="Z"/>
            </SegmentedBar>
          </ScrollView>
          <ScrollView ref="scroll" :row="scrollRow" col="0">
            <StackLayout id="backround">
              <product-card :product="product" v-for="product in products" :key="product.id"></product-card>
              <GridLayout columns="*, *, *" rows="*">
                  <Button v-if="currentPage!==1" @tap="currentPageDown" text="<" row="0" col="0"></Button>
                  <Label :text="currentPage+'/'+pages" row="0" col="1"/>
                  <Button v-if="currentPage < totalCount/productsPerPage" @tap="currentPageUp" text=">" row="0" col="2"></Button>
              </GridLayout>
            </StackLayout>
          </ScrollView>
          <StackLayout :row="stackRow" col="0">
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
import ProductCard from './ProductCard.vue';

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
          totalCount: 0,
          rows: '30, *, 90',
          scrollRow: 1,
          stackRow: 2
        };
    },
    computed: {
      pages() {
        return Math.round(this.totalCount / this.productsPerPage)
      }
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
          console.log('tabchanged')
          if (this.activeTab===2) {
            this.rows = '30, 30, *, 90'
            this.scrollRow = 2
            this.stackRow = 3
          } else {
            this.rows = '30, *, 90'
            this.scrollRow = 1
            this.stackRow = 2
          }
          this.currentPage = 1
          this.getProductsFromDB(this.currentPage)
        },
        pageChanged(payload) {
          this.getProductsFromDB(payload)
          //Scroll to top of grid
          let scroll = this.$refs.scroll.nativeView
          scroll.scrollToVerticalOffset(0, true)
        },
        currentPageDown() {
          this.currentPage = this.currentPage - 1
          this.pageChanged(this.currentPage)
        },
        currentPageUp() {
          this.currentPage = this.currentPage + 1
          this.pageChanged(this.currentPage)
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

<style>
    ActionBar {
        background-color: #58b368;
        color: #ffffff;
    }
    #backround {
      background-color: #454d66
    }
    SegmentedBar {
      background-color: #58b368;
      color: #ffffff;
      font-weight: bold;
      border-color: #58b368;
    }
</style>
