<template>
  <!-- PaymentDetails -->
    <Page actionBarHidden="false">
      <ActionBar title="">
      </ActionBar>
      <StackLayout backgroundColor="#3c495e">
        <TextField hint="Card number"/>
        <TextField hint="Expiration date"/>
        <TextField hint="Card number"/>
        <TextField hint="Security Code" />
        <Button text="Send my order" @tap="confirmOrder" />

      </StackLayout>
    </Page>
</template>

<script>
import Home from '../App.vue';
export default {
    data () {
        return {
        };
    },
    methods: {
        confirmOrder() {
          let orderObj = {
            customer: this.$store.state.customer,
            products: this.$store.state.cart
          }
          fetch('http://localhost:5000/api/order', {
              body: JSON.stringify(orderObj),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }).then(
              this.$navigateTo(Home)
            )
            alert({
              title: "Thank you!",
              message: "Your order has been placed and is being processed.",
              okButtonText: "Done"
            }).then(() => {
              console.log("Returning...");
            });

        }
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
