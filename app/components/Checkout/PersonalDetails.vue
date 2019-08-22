<template>
    <Page actionBarHidden="false">
      <StackLayout backgroundColor="#3c495e">
        <TextField v-model="firstName" hint="First name"/>
        <Label class="fa" :text="'fa-eye' | fonticon" />
        <Label class="fa" :text="'fa-heart' | fonticon" />
        <Label class="fa" :text="'fa-user' | fonticon" />        
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
          this.$store.state.details.fname = this.firstName
          this.$store.state.details.lname = this.lastName
          this.$store.state.details.mail = this.mail
          this.$store.state.details.phone = this.phone
          this.$navigateTo(ShippingDetails)

          console.log(this.$store.state.details.fname)
          console.log(this.$store.state.details.lname)
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
