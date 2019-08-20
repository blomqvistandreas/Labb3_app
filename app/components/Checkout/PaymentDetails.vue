<template>
    <Page actionBarHidden="false" title="Hello">
      <StackLayout backgroundColor="#3c495e">
        <TextField :text="textFieldValue" hint="Card number"/>
        <label :text="textFieldValue" hint="Month(SELECT IF POSSIBLE) / YEAR" />
        <DatePicker :date="someDate" />
        <TextField :text="textFieldValue" hint="Card number"/>
        <TextField :text="textFieldValue" hint="Security Code" />
        <Button text="Button" @tap="confirmOrder" />

      </StackLayout>
    </Page>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    methods: {
        confirmOrder() {
          // TODO match store.js
          this.$store.state.details.fname = this.firstName
          this.$store.state.details.lname = this.lastName
          this.$store.state.details.mail = this.mail
          this.$store.state.details.phone = this.phone
          alert({
            title: "Thank you!",
            message: "Your order is complete",
            okButtonText: "Continue"
          }).then(() => {
            console.log("Return to homepage");
          });
        },
        newCustomer() {
          fetch('http://localhost:5000/api/order', {
            body: JSON.stringify(this.$store.state.details),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
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
  margin-left: 120;
  margin-right: 120;
  margin-top: 50;
  padding: 15;
  border-radius: 30;
  text-align: center;
  outline: inherit;
}
</style>
