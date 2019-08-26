<template>
    <Page actionBarHidden="false" id="background">
        <ActionBar title="Cart">
        </ActionBar>
        <GridLayout columns="*" rows="*, 70, 70"> 
        <!-- <Label class="subtitle" text="Upgrade your lifestyle"/> -->
        <!-- <SegmentedBar row="0" col="0">
            <SegmentedBarItem title="Image" />
            <SegmentedBarItem title="Name" />
            <SegmentedBarItem title="Price" />
            <SegmentedBarItem title="Quantity" />
          </SegmentedBar> -->
        <ListView row="0" for="item in items" @itemTap="onItemTap">
            <v-template>
               <!-- <FlexboxLayout justifyContent="space-around" class="cell" height="70">
                    <Image :src="item.image" stretch="aspectFit" width="70" />
                    <Label class="vcenter" width="22%" :text="item.name"/>
                    <Label class="vcenter" width="22%" :text="item.price"/>
                    <Button class="cell-button" width="11%" height="50" text="-" @tap="minusTapped(item)"/>
                    <Label class="vcenter" width="11%" :text="item.quantity"/>
                    <Button class="cell-button" width="11%" text="+" height="30" @tap="plusTapped(item)"/>
                </FlexboxLayout> -->
                <StackLayout orientation="horizontal">
                    <!-- <GridLayout columns="*,*,*,*,*" rows="*">  -->
                    <Image width="16%" :src="item.image" stretch="aspectFit" />
                    <Label width="16%" class="vcenter"  :text="item.name"/>
                    <Label width="16%" class="vcenter"  :text="item.price"/>
                    <GridLayout width="50%" columns="*,*,*" rows="*,*,*"> 
                        <Button col="0" row="1" class="cell-button" height="25" text="-" @tap="minusTapped(item)"/>
                        <Label col="1" row="1" class="vcenter"  :text="item.quantity"/>
                        <Button col="2" row="1" class="cell-button" height="25" text="+" @tap="plusTapped(item)"/>
                    </GridLayout>
                </StackLayout>
                    <!-- </GridLayout> -->
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
            for (let i = 0; i < 10; i++) {
                let x = i;
                if(i % 2 === 0) {
                    let demoItem = {
                        name:"Yacht",
                        price:"6000", 
                        quantity: 1,
                        image: "~/assets/images/yacht.png",
                        id: x
                    };
                   this.items.push(demoItem);
                } else {
                    let demoItem2 = {
                        name:"Super frog",
                        price:"6000", 
                        quantity: 1,
                        image: "~/assets/images/frog.jpg",
                        id: x
                    };
                    this.items.push(demoItem2);
                }
            }
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
    $secondary: #009358;
    $primary: #53ba82;
    $third: #1c6b48;
    $white: rgb(246, 246, 246);
    $black: rgb(50, 50, 50);
    $background: #454d66;
    $find: yellow;

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

