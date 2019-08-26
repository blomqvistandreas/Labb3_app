<template>
  <!-- PaymentDetails -->
    <Page actionBarHidden="false" title="Hello">
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
              title: "Order",
              message: "Your message",
              okButtonText: "Your OK button text"
            }).then(() => {
              console.log("Alert dialog closed");
            });

        }
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
  margin-left: 100;
  margin-right: 100;
  margin-top: 50;
  padding: 15;
  border-radius: 30;
  text-align: center;
  outline: inherit;
}
</style>
