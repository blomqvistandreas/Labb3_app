<template>
    <Page actionBarHidden="false">
        <Button text="Goto Payment" @tap="goToCheckout" />
    </Page>
</template>

<script>
import PaymentDetails from './PaymentDetails.vue';

export default {
    data () {
        return {
        };
    },
    methods: {
        goToCheckout() {
            this.$navigateTo(PaymentDetails)
        },
    }
}
</script>

<style scoped>
</style>
