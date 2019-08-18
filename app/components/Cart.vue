<template>
    <Page actionBarHidden="false" id="background">
        <ActionBar title="Cart">
        </ActionBar>
    <StackLayout class="page">
        <!-- <Label class="subtitle" text="Upgrade your lifestyle"/> -->
        
        <ListView height="80%" for="item in items" @itemTap="onItemTap">
            <v-template>
                <!-- Shows the list item label in the default color and style. -->
               <FlexboxLayout justifyContent="space-around" class="cell" height="90">
                    <Image :src="item.image" stretch="aspectFit" width="70" />
                    <Label width="22%" :text="item.name"/>
                    <Label width="22%" :text="item.price"/>
                    <Button class="cell-button" width="11%" text="-" @tap="minusTapped(item)"/>
                    <Label width="11%" :text="item.quantity"/>
                    <Button class="cell-button" width="11%" text="+" height="30" @tap="plusTapped(item)"/>
                </FlexboxLayout>
            </v-template>
        </ListView> 
        <label class="subtitle" text="Total: $999999"/>
        <button text="Go to checkout" @tap="goToCheckout"/>
    </StackLayout>
    </Page>
</template>

<script>
    //import cartTable from './CartTable'
    export default { 
        name: "Cart",
        created() {
            let demoItem = {
                        name:"Yacht",
                        price:"6000", 
                        quantity: 99,
                        image: "~/assets/images/yacht.png",
                    };
            let demoItem2 = {
                        name:"Super frog",
                        price:"6000", 
                        quantity: 99,
                        image: "~/assets/images/frog.jpg",
                    };

            for (let i = 0; i < 10; i++) {
                if(i % 2 === 0) {
                   this.items.push(demoItem);
                } else {
                    this.items.push(demoItem2);
                }
            }
        },
        methods: {
            goToCheckout() {
                alert('Go to Checkout')
                .then(() => {
                    console.log("Alert dialog closed.");
                });
            },

            onItemTap(item) {
                alert('Go to' + item.name)
                .then(() => {
                    console.log("Alert dialog closed.");
                });
            },
            minusTapped(item) {
                alert(item.name +' decressed')
                .then(() => {
                    console.log("Alert dialog closed.");
                });
            },
            plusTapped(item) {
                alert(item.name + ' added to cart')
                .then(() => {
                    console.log("Alert dialog closed.");
                });
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
    $primary: rgb(0, 147, 88);
    $secondary: #53ba82;
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
        height: 33%;
        margin: 10rem;
    }

    Listview {
        color: $black;
        margin-top: 10rem;
        margin-bottom: 0rem;
        font-size: 14px;
        // padding-top: 30px;
        // border-top-width: 1rem;
        // padding: 4rem;
        // border-color: $black;
    }

    .cell-button {
        height: 33%;
        font-weight: bolder;
        margin: 10rem;
    }

    Button {
        background-color: $primary;
        border-radius: 5px;
        margin: 6rem;
        font-size: 25%;
        color: $white;
    }

   label {
       text-align: center;
   } 

   .subtitle {
    //    margin: 6rem;
       font-size: 24px;
       color: $black;
       border-top-width: 1rem;
       border-bottom-width: 1rem;
       padding: 4rem;
       border-color: $black;
   }

</style>

