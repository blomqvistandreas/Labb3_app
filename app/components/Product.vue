<template>
    <Page actionBarHidden="false">
        <ActionBar title="">
        </ActionBar>
        <GridLayout columns="*" rows="*, 70, 70">
            <StackLayout row="0">
                <Image :src="product.image" backgroundColor="white" stretch="aspectFill" height="250" width="100%" />
                <Label id="Name" textWrap="true" :text="product.name" width="100%" />
                <ScrollView orientation="vertical">
                    <Label id="Description" textWrap="true" :text="product.description"/>
                </ScrollView>
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
        alert({
            title: "Added to cart",
            okButtonText: "OK"
        }).then(() => {
            console.log("Alert dialog closed");
        }); 
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

<style scoped>
 
ActionBar {
    background-color: #58b368;
    color: white;
}

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
    background-color: #58b368;
    border-radius: 5;
    margin: 6rem;
    font-size: 25%;
    color: white;
    margin-bottom: 10px;
}

 #subtitle {
    margin-top: 7;
    font-size: 24px;
    color: black;
    border-top-width: 1rem;
    border-bottom-width: 1rem;
    padding: 4rem;
    border-color: black;
    text-align: center  
   }

</style>
