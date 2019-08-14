<template>
    <Page actionBarHidden="false">
        <Button text="Goto Shipping" @tap="goToCheckout" />
    </Page>
</template>

<script>
import ShippingDetails from './ShippingDetails.vue';

export default {
    data () {
        return {
        };
    },
    methods: {
        goToCheckout() {
            this.$navigateTo(ShippingDetails)
        },
    }
}
</script>

<style scoped>
</style>
