<template>
    <div>
        <div class="container-fluid" style="height: calc(100vh - 25vh) ;">
            <div class="row h-100">
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img :src="`${shoes.img}`" alt="" class="product mx-5">
                </div>
                <div class="col-12 col-md-6 d-flex align-self-center flex-column px-5">
                    <div class="row mb-3">
                        <p class="font1 text-center px-2 fw-bold fs-3 m-0" style="border-bottom: solid 2px #94979c;">Select Size</p>
                    </div>
                    <div class="row gap-1 d-flex justify-content-center my-4" v-if="sizeShout != null">
                        <div class="col-2 m-0 d-flex justify-content-center my-3" v-for="(item,index) in sizeShout" :key="index">
                            <input type="checkbox" class="btn-check" v-model="BuySize" :value="`${item}`" :id="`${item}`" autocomplete="off">
                            <label class="btn btn-outline-primary w-100 m-0 p-2 fs-4 fw-bold font1" :for="`${item}`">{{ item }}</label>
                        </div>
                    </div>
                    <div class="row" v-else>
                        <p class="text-center fw-bold fs-4 mt-5 text-danger">Sold out!</p>
                    </div>
                    <div class="row mt-4">
                        <div class="col-10">
                            <button class="btn btn-primary w-100 rounded-5 fw-bold font1 ยัขๅ" type="submit">Add to card</button>
                        </div>
                        <div class="col-2">
                            <input type="checkbox" v-model="favorite" class="btn-check m-0" id="btn-check-outlined" autocomplete="off">
                            <label class="btn btn-outline-primary rounded-5 fw-bold m-0 p-0" for="btn-check-outlined">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 54 54" fill="none">
                                    <circle cx="27" cy="27" r="26.5" fill="#5E17EB" fill-opacity="0.19" />
                                    <path d="M34.1011 11.3022C31.0859 11.3022 28.3873 12.9494 26.7048 15.4762C25.0223 12.9494 22.3236 11.3022 19.3084 11.3022C14.1943 11.3022 10.0464 15.9816 10.0464 21.7652C10.0464 23.9925 10.3629 26.0515 10.9126 27.9607C13.5446 37.3193 21.6573 42.9157 25.6719 44.4505C26.2383 44.6751 27.1712 44.6751 27.7376 44.4505C31.7522 42.9157 39.8649 37.3193 42.4969 27.9607C43.0466 26.0515 43.3631 23.9925 43.3631 21.7652C43.3631 15.9816 39.2152 11.3022 34.1011 11.3022Z" fill="white"/>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    layout: "navbar",
    data() {
        return {
            id: "",
            shoes :
                {
                id: "1",
                name : "YEEZY 350 V.2 BLACK RED" ,
                img  : "https://cdn.discordapp.com/attachments/882572081861099543/1164569979195228180/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-Product.webp?ex=6543b14f&is=65313c4f&hm=cc21525f50a576622580c7802cc3a3d181c20b7a7bfe54ec0be367cf9bae8e1d&",
                type: "NewAndOutstanding"
                },
                sizeShout: ["36","37","38","39","40","41","42","43"],
                BuySize: [],
                favorite: false,
        }
    },
    mounted() {
        this.id = this.$route.query.id;
    }
}
</script>

<style scoped>

.product {
      height: 200px;
}
@media (min-width: 576px) {
    .product {
      height: 200px;
    }
 }

@media (min-width: 768px) {
    .product {
      height: 250px;
    }
 }

@media (min-width: 992px) {
    .product {
      height: 300px;
    }
 }

@media (min-width: 1200px) { 
    .product {
      height: 300px;
    }
 }

@media (min-width: 1400px) { 
    .product {
      height: 350px;
    }
 }
</style>