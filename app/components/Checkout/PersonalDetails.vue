<template>
  <!-- PersonalDetails -->
    <Page actionBarHidden="false">
      <StackLayout backgroundColor="#3c495e">
        <TextField v-model="firstName" hint="First name"/>
        <TextField v-model="lastName" hint="Last name" />
        <TextField v-model="mail" hint="Email"/>
        <TextField v-model="phone" hint="Phone number" />
        <Button text="Continue" @tap="nextPage"/>
      </StackLayout>
    </Page>
</template>

<script>
import ShippingDetails from './ShippingDetails.vue';
export default {

    data () {
        return {
          firstName: null,
          lastName: null,
          mail: null,
          phone: null
        };
    },
    methods: {
        nextPage() {
          this.$store.state.customer.fname = this.firstName
          this.$store.state.customer.lname = this.lastName
          this.$store.state.customer.mail = this.mail
          this.$store.state.customer.phone = this.phone
          this.$navigateTo(ShippingDetails)
        },
    }
}
</script>

<!--
#58b368
#ffffff
-->
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
