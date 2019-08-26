<template>
    <Page actionBarHidden="false">
      <ActionBar title="Payment details">
      </ActionBar>
      <GridLayout columns="*" rows="*,*,*,*,*" backgroundColor="#3c495e">
        <TextField row="0" hint="Card number"/>
        <TextField row="1" hint="Expiration date"/>
        <TextField row="2" hint="Card holder"/>
        <TextField row="3" hint="Security Code" />
        <Button row="4" text="Send my order" @tap="confirmOrder" />
      </GridLayout>
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
              this.$store.commit('emptyCart')
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
