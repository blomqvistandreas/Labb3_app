<template>
    <Page class="page" id="backround">
        <ActionBar title="YardSale" class="action-bar">
          <ActionItem @tap="goToCart" text="Cart"
          ios.position="right"
          android.position="actionBar" />
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
          <ScrollView ref="scroll" row="2" col="0">
            <StackLayout>
              <product-card :product="product" v-for="product in products" :key="product.id"></product-card>
              <GridLayout v-if="totalCount > productsPerPage" columns="*, *, *" rows="*">
                  <Button v-if="currentPage!==1" @tap="currentPageDown" text="<" row="0" col="0"></Button>
                  <Label :text="currentPage+'/'+pages" row="0" col="1"/>
                  <Button v-if="currentPage < totalCount/productsPerPage" @tap="currentPageUp" text=">" row="0" col="2"></Button>
              </GridLayout>
            </StackLayout>
          </ScrollView>
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
          rows: '30, *',
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
          //Scroll to top of grid
          let scroll = this.$refs.scroll.nativeView
          scroll.scrollToVerticalOffset(0, true)

          if (this.activeTab===2) {
            this.rows = '30, 30, *'
          } else {
            this.rows = '30, *'
          }
          this.currentPage = 1
          this.getProductsFromDB(this.currentPage)
        },
        pageChanged(payload) {
          //Scroll to top of grid
          let scroll = this.$refs.scroll.nativeView
          scroll.scrollToVerticalOffset(0, true)

          this.getProductsFromDB(payload)
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

<style scoped>
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
    Button {
      background-color: #58b368;
      color: black;
      border-width: 1;
      border-radius: 10;
      font-weight: bold;
      margin-left: 20;
      margin-right: 20;
      margin-bottom: 10;
      height: 60;
    }
    Label {
      text-align: center;
      font-weight: bold;
    }
</style>
