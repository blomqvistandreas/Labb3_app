<template>
    <Page actionBarHidden="false">
      <StackLayout backgroundColor="#3c495e">
        <TextField :text="country" hint="Country(Select if possible)"/>
        <TextField :text="zipCode" hint="ZIP Code" />
        <TextField :text="city" hint="City"/>
        <TextField :text="address" hint="Address" />
        <Button text="Continue" @tap="nextPage" />
      </StackLayout>

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
        nextPage() {
          // TODO match store.js
          this.$store.state.details.fname = this.firstName
          this.$store.state.details.lname = this.lastName
          this.$store.state.details.mail = this.mail
          this.$store.state.details.phone = this.phone
          this.$navigateTo(PaymentDetails)
        },
    }
}
</script>

<style scoped>
TextField {
  background-color: #289062;
  text-decoration-color: #289062;
  margin-left: 30;
  margin-right: 30;
  margin-top: 50;
  padding: 15;
  border-radius: 30;
  text-align: center;
  outline: inherit;
}
Button {
  background-color: #ffffff;
  text-decoration-color: #289062;
  margin-left: 120;
  margin-right: 120;
  margin-top: 50;
  padding: 15;
  border-radius: 30;
  text-align: center;
  outline: inherit;
}
</style>
