<template>
    <Page actionBarHidden="false">
      <StackLayout backgroundColor="#3c495e">
        <TextField :text="textFieldValue" hint="First name"/>
        <Label class="far" style="font-size: 50em; color: blue" text="&#xf2b9;"></Label>
        <Label class="fab" style="font-size: 50em; color: black" text="&#xf09b;"></Label>
        <TextField :text="textFieldValue" hint="Last name" />
        <Label class="fas" style="font-size: 50em; color: gray" text="&#xf013;"></Label>
        <TextField :text="textFieldValue" hint="Email"/>
        <TextField :text="textFieldValue" hint="Phone number" />
        <Button text="Continue" @tap="goToCheckout"/>
      </StackLayout>
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
