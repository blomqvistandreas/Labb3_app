<template>
    <Page actionBarHidden="false" id="background">
        <ActionBar title="Cart">
        </ActionBar>
        <GridLayout columns="*" rows="*, 70, 70"> 
        <ListView row="0" for="item in items" @itemTap="onItemTap">
            <v-template>
                <StackLayout orientation="horizontal">
                    <Image width="16%" :src="item.image" stretch="aspectFit" />
                    <Label width="16%" class="vcenter"  :text="item.name"/>
                    <Label width="16%" class="vcenter"  :text="item.price"/>
                    <GridLayout width="50%" columns="*,*,*" rows="*,*,*"> 
                        <Button col="0" row="1" class="cell-button" height="25" text="-" @tap="minusTapped(item)"/>
                        <Label col="1" row="1" class="vcenter"  :text="item.quantity"/>
                        <Button col="2" row="1" class="cell-button" height="25" text="+" @tap="plusTapped(item)"/>
                    </GridLayout>
                </StackLayout>
            </v-template>
        </ListView> 
        <label row="1" class="subtitle" :text="'Total: $' + getTotalPrice() "/>
        <button row="2" text="Go to checkout" @tap="goToCheckout()"/>
        </GridLayout>
    </Page>
</template>

<script>
    import Product from './Product.vue';
    import Checkout from './Checkout/PersonalDetails.vue';

    export default { 
        name: "Cart",
        created() {
            this.items = this.$store.state.cart;
        },
        methods: {
            removeItem(item) {
                for (let i = 0; i < this.items.length; i+=1) {
                    if(item.id === this.items[i].id) {
                    this.items.splice(i, 1)
                    return
                    }
                }
            },
            goToCheckout() {
                this.$navigateTo(Checkout)
            },
            onItemTap(event) {                
                this.$navigateTo(Product, {
                props: {
                    productId: event.item.id,
                }
                })
            },
            minusTapped(item) { 
                this.$store.commit('decreseItemInCart', item)       
            },
            plusTapped(item) {
                this.$store.commit('updateCart', item)
            },
            getTotalPrice() {
                let total = 0;
                this.items.forEach(item => {
                    total += (item.quantity * item.price)
                });
                return total;
            }
        },
         data() {
            return {
                extra: ["Checkout"],
                demoImage: '../assets/images/boat.jpeg',
                items: []
            }
        },
    }
</script>


<style lang="scss" scoped>
    $primary: #58b368;
    $secondary: #009358;
    $white: rgb(246, 246, 246);
    $black: rgb(50, 50, 50);
    $background: #454d66;
    $find: yellow;

    ActionBar {
    background-color: $primary;
    color: $white;
  }

    .page {
        background-color: $white;
        color: $black;
    }

    .cell {
        background-color: $white;
        color: $black;
    }

    image {
        margin-left: 10rem;
        margin-right: 10rem;
        border-radius: 10;
    }

    Listview {
        color: $black;
        margin-top: 10rem;
        margin-bottom: 0rem;
        font-size: 14px;
        font-weight: bold;
    }

    .cell-button {
        margin: 40px;
    }

    button-div {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    Button {
        background-color: $secondary;
        border-radius: 5;
        margin: 6rem;
        font-size: 25%;
        color: $white;
    }

   label {
       text-align: center;
   } 

   .vcenter {
        padding-top: 25;
        padding-bottom: 25;
   }

   .subtitle {
       font-size: 24px;
       color: $black;
       border-top-width: 1rem;
       border-bottom-width: 1rem;
       padding: 4rem;
       border-color: $black;
   }

</style>

