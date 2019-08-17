<template>
    <Page actionBarHidden="false" id="background">
        <ActionBar>
        <ActionItem @tap="onTapDelete"
            ios.systemIcon="18i" ios.position="right" -->
            text="Checkout" android.position="popup" />
    </ActionBar>
        <Label text="Cart page" />
        <button text="Checkout"/>
        <ListView for="item in items"  @itemTap="onItemTap">
            <v-template>
                <!-- Shows the list item label in the default color and style. -->
               <FlexboxLayout justifyContent="space-around" backgroundColor="#1c6b48" height="90">
                    <Image :src="item.image" stretch="aspectFit" width="70" />
                    <Label text="Title"/>
                    <Label text="Price"/>
                    <Button text="Plus" height="30" @tap="plusTapped"/>
                    <Label text="Quantity"/>
                    <Button text="Minus" @tap="minusTapped"/>
                </FlexboxLayout>
            </v-template>
        </ListView> 
        <label text="Checkout"></label>
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
                        pris:"6000", 
                        antal: 11,
                        image: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
                    },
                    {
                        name:"Byxor",
                        pris:"600", 
                        antal: 14,
                        image: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
                    },
                    {
                        name:"Overall",
                        pris:"900", 
                        antal: 3,
                        image: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
                    }
                ]
            }
        },
    }
</script>

<style scoped>

    Listview {
        background-color: #454d66;
        color: antiquewhite;
        font-size: 14px;
        padding-top: 30px;
    }

    Button {
        background-color: rgb(0, 147, 88);
        border-radius: 5px;
        height: 30%px;
    }

    /* image {
        height: 50%;
        width: 50%;
    } */

</style>

