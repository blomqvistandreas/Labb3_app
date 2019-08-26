<template>
  <!-- ShippingDetails -->
    <Page actionBarHidden="false">
      <ActionBar title="">
      </ActionBar>
      <StackLayout backgroundColor="#3c495e">
        <TextField v-model="country" hint="Country"/>
        <TextField v-model="zipCode" hint="ZIP Code" />
        <TextField v-model="city" hint="City"/>
        <TextField v-model="address" hint="Address" />
        <Button text="Continue" @tap="nextPage" />
      </StackLayout>

    </Page>
</template>

<script>
import PaymentDetails from './PaymentDetails.vue';

export default {
    data () {
        return {
          country: null,
          zipCode: null,
          city: null,
          address: null
        };
    },
    methods: {
        nextPage() {
          // TODO match store.js
          this.$store.state.customer.country = this.country
          this.$store.state.customer.zipCode = this.zipCode
          this.$store.state.customer.city = this.city
          this.$store.state.customer.address = this.address
          this.$navigateTo(PaymentDetails)
        },
    }
}
</script>

<style scoped>
ActionBar {
  background-color: #58b368;
  color: white;
}
TextField {
  background-color: #289062;
  margin-left: 30;
  margin-right: 30;
  margin-top: 50;
  padding: 15;
  border-radius: 30;
  text-align: center;
  outline: inherit;
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
</style>
