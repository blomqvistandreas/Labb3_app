<template>
    <Page actionBarHidden="false">

        <ActionBar title="Product Name">
        </ActionBar>

        <StackLayout >
            <Image :src="product.image" backgroundColor="white" stretch="aspectFill" height="300" width="100%" />
                <StackLayout orientation="horizontal"  rows="1">
                    <Label id="Name" textWrap="true" :text="product.name" height="70" width="50%" />
                    <Label :text="product.price" height="70" width="50%" />
                </StackLayout>
            <Label id="Description" textWrap="true" :text="product.description" height="150" width="100%"/>
            <Button id="Button" @tap="addToCart" text="Add to Cart"></Button>
        </StackLayout>
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

Label {
    text-align: center;

}
    
#Description {
    margin-top: -60px;    
}

#Button {
    background-color: $secondary;
    color: $white;
    text-justify: auto;    
    text-align: center;
    margin-bottom: 0px;
    margin-right: 5px;
    margin-left: 400px;
    border-style: solid;
    border-color: $black;
    border-width: 2;
    border-radius: 20;
    
}
StackLayout {

}

</style>
