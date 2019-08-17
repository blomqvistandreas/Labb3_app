<template>
    <Page actionBarHidden="false" id="background">
        <ActionBar>
        <!-- <ActionItem @tap="onTapDelete"
            ios.systemIcon="18" ios.position="right"
            text="Checkout" android.position="popup" /> -->
        </ActionBar>
    <StackLayout backgroundColor="#454d66">
        <Label class="subtitle" text="Upgrade your lifestyle"/>
        <button text="Go to checkout" color="white"/>
        <ListView height="80%" for="item in items" @itemTap="onItemTap">
            <v-template>
                <!-- Shows the list item label in the default color and style. -->
               <FlexboxLayout justifyContent="space-around" backgroundColor="#1c6b48" height="90">
                    <Image :src="item.image" stretch="aspectFit" width="70" />
                    <Label width="22%" :text="item.name"/>
                    <Label width="22%" :text="item.price"/>
                    <Button width="11%" text="+" height="30" @tap="plusTapped"/>
                    <Label width="11%" :text="item.quantity"/>
                    <Button width="11%" text="-" @tap="minusTapped"/>
                </FlexboxLayout>
            </v-template>
        </ListView> 
        <label class="subtitle" text="Total: $999999"/>
    </StackLayout>
    </Page>
</template>

<script>
    //import cartTable from './CartTable'
    export default { 
        name: "Cart",
        // components: {
        //      cartTable,
        // },
        methods: {
            onItemTap() {
                alert('Go to item')
                .then(() => {
                    console.log("Alert dialog closed.");
                });
            },
            minusTapped() {
                alert('Item decressed')
                .then(() => {
                    console.log("Alert dialog closed.");
                });
            },
            plusTapped() {
                alert('Item added to cart')
                .then(() => {
                    console.log("Alert dialog closed.");
                });
            }
        },
         data() {
            return {
                extra: ["Checkout"],
                items: [
                    {
                        name:"Yacht",
                        price:"6000", 
                        quantity: 11,
                        image: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
                    },
                    {
                        name:"Byxor",
                        price:"600", 
                        quantity: 14,
                        image: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
                    },
                    {
                        name:"Overall",
                        price:"900", 
                        quantity: 9999,
                        image: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
                    },
                    {
                        name:"Tesla spacerocket launcher",
                        price:"600", 
                        quantity: 14,
                        image: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
                    },
                    {
                        name:"Byxor",
                        price:"600", 
                        quantity: 14,
                        image: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
                    },
                    {
                        name:"Byxor",
                        price:"600", 
                        quantity: 14,
                        image: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
                    },
                ]
            }
        },
    }
</script>

<style scoped>

    Listview {
        color: antiquewhite;
        font-size: 14px;
        padding-top: 30px;
    }

    Button {
        background-color: rgb(0, 147, 88);
        border-radius: 5px;
        height: 30%px;
    }

   label {
       text-align: center;
       color: white;
   } 

   .subtitle {
       margin: 6rem;
       font-size: 24px;
   }

</style>

