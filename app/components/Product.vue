<template>
    <Page actionBarHidden="false">

        <ActionBar title="Product Name">
        </ActionBar>

        <StackLayout >
            <Image :src="product.image" stretch="aspectFill" height="300" width="100%" />
                <StackLayout orientation="horizontal"  rows="1">
                    <Label id="Name" text="Name" height="70" width="50%" />
                    <Label text="Price" height="70" width="50%" />
                </StackLayout>
            <Label id="Description" backtextWrap=true text="Description" height="150" width="100%"/>
            <Button id="Button" @tap="addToCart" text="Add to Cart"></Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    props: {
        productId: 0
    },
    data() {
        return {
            imageTest: "https://dw8stlw9qt0iz.cloudfront.net/FHKzfst9humx0GtrBeGw3IGA-Oo=/2000x2000/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/thumbnail/standard/27aee7af-a3dc-4c67-e57f-7648839ecd18.png", 
            product: {}
        }
    },
    methods: {
    addToCart() {
      this.$store.commit('updateCart', this.product)
    }
    },
        
    getProduct() {
      fetch('http://localhost:5000/api/product/'+this.productId)
      .then(response => response.json())
      .then(result => {
        this.product = result[0]
      }).catch(error => {
        console.log(error.message)
      })
    },
    
}


</script>

<style scoped>

Label {
    text-align: center;

}
    
#Description {
    margin-top: -60px;    
}

#Button {
    background-color: #53ba82;
    color: #ffffff;
    text-justify: auto;    
    text-align: center;
    margin-bottom: 0px;
    margin-right: 5px;
    margin-left: 400px;
    border-style: solid;
    border-color: black;
    border-width: 2;
    border-radius: 20;
    
}
StackLayout {
    background-color: #454d66
}

</style>
