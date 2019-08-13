<template>
    <Page>
        <ActionBar title="YardSale"/>
        <StackLayout>
            <Button text="En Produkt" @tap="$navigateTo(Product)" />
            <Button text="Checkout" @tap="$navigateTo(Checkout)" />
            <Button text="Kundvagn" @tap="$navigateTo(Cart)" />
        </StackLayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello Worldddd'
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
