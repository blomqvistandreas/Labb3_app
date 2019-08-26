<template>
    <Page actionBarHidden="false">
      <ActionBar title="Shipping details">
      </ActionBar>
      <GridLayout columns="*" rows="*,*,*,*,*" backgroundColor="#3c495e">
        <TextField row="0" v-model="country" hint="Country"/>
        <TextField row="1" v-model="zipCode" hint="ZIP Code" />
        <TextField row="2" v-model="city" hint="City"/>
        <TextField row="3" v-model="address" hint="Address" />
        <Button row="4" text="Continue" @tap="nextPage" />
</GridLayout>
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
          this.$store.state.customer.country = this.country
          this.$store.state.customer.zipCode = this.zipCode
          this.$store.state.customer.city = this.city
          this.$store.state.customer.address = this.address
          this.$navigateTo(PaymentDetails, {
            transition: {

              // name: 'slideLeft',
              //
              // duration: 2000,

            },
          })
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
  background-color: #009358;
  margin: 30;
  padding: 10;
  border-radius: 20;
  text-align: center;
  outline: inherit;
}
Button {
  background-color: #58b368;
  border-radius: 10;
  font-size: 20%;
  color: white;
  margin-right: 100;
  margin-left: 100;
  margin-top: 20;
  margin-bottom: 50;
}
</style>
