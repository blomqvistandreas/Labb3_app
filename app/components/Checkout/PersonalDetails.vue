<template>
    <Page actionBarHidden="false">
      <ActionBar title="Personal Details">
      </ActionBar>
      <GridLayout columns="*" rows="*,*,*,*,*" backgroundColor="#3c495e">
        <TextField row="0" v-model="firstName" hint="First name"/>
        <TextField row="1" v-model="lastName" hint="Last name" />
        <TextField row="2" v-model="mail" hint="Email"/>
        <TextField row="3" v-model="phone" hint="Phone number" />
        <Button row="5" text="Continue" @tap="nextPage"/>
      </GridLayout>
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
  background-color: #009358;
  margin: 30;
  padding: 10;
  border-radius: 20;
  text-align: center;
  outline: inherit;
}
Button {
  background-color: #58b368;
  padding: 30;
  margin: 40;
  margin-left: 100;
  margin-right: 100;
  margin-bottom: 30;
  border-radius: 10;
  font-size: 25%;
  color: white;
  margin-bottom: 10px;
}

</style>
