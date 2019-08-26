<template>
    <Page actionBarHidden="false">
        <GridLayout columns="*" rows="*, 50, 50">
            <StackLayout row="0">
                <Image :src="product.image" backgroundColor="white" stretch="aspectFill" height="250" width="100%" />
                <Label id="Name" textWrap="true" :text="product.name" width="100%" />
                <ScrollView orientation="vertical">
                    <Label id="Description" textWrap="true" :text="product.description"/>
                </ScrollView>
                <Label id="subtitle" :text="'Price: $' + product.price"/>
                <Button id="Button" @tap="addToCart" text="Add to Cart"></Button>
            </StackLayout>
            <Label row="1" id="subtitle" :text="'Price: $' + product.price"/>
            <Button row="2" id="Button" @tap="addToCart" text="Add to Cart"></Button>
        </GridLayout>
    </Page>
</template>

<script>
export default {
    created() {
        this.getProduct() 
    },
    props: {
        productId: 0
    },
    data() {
        return {
            product: {}
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('updateCart', this.product)
        },
        getProduct() {
        fetch('http://localhost:5000/api/product/'+this.productId)
        .then(response => response.json())
        .then(result => {
            this.product = result[0]
        }).catch(error => {
            console.log(error.message)
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

#Name {
    font-size: 24px;
    border-bottom: 1rem;
    text-align: center;
    border-bottom-width: 1rem;
    padding: 4rem;
    margin: 10px;
}
    
#Description {
    text-align: start;
    margin: 10;
    margin-bottom: 10px;
}

#Button {
    background-color: #009358;
    border-radius: 5;
    margin: 10px;
    font-size: 24px;
    color: white;
    margin-bottom: 10;
}
 #subtitle {
    margin: 5px;
    font-size: 24px;
    color: black;
    border-top-width: 1rem;
    border-bottom-width: 1rem;
    padding: 4rem;
    border-color: black;
    text-align: center  
   }

</style>
