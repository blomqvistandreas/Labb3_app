
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <StackLayout>
            <Button @tap="goToCart" text="Cart"></Button>
            <Button @tap="goToCheckout" text="Checkout"></Button>          
            <Button @tap="goToProduct" text="Product"></Button>
        </StackLayout>
    </Page>
</template>
<script>
import Cart from './Cart.vue';
import Checkout from './Checkout/PersonalDetails.vue';
import Product from './Product.vue';

export default {
    data () {
        return {
        };
    },
    methods: {
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
</style>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
