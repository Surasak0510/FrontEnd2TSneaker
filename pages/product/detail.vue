<template>
    <div>
        <div class="container-fluid" style="height: calc(100vh - 25vh) ;">
            <div class="row h-100">
                <!-- <pre>
                    {{ shoes }}
                </pre> -->
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img :src="`${shoes.image}`" alt="" class="product mx-5">
                </div>
                <div class="col-12 col-md-6 d-flex align-self-center flex-column px-5">
                    <div class="row mb-3">
                        <p class="font1 text-center px-2 fw-bold fs-3 m-0" style="border-bottom: solid 2px #94979c;">Select Size</p>
                    </div>
                    <div class="row gap-1 d-flex justify-content-center my-4" v-if="sizeShout != null">
                        <div class="col-2 m-0 d-flex justify-content-center my-3" v-for="(item,index) in sizeShout" :key="index">
                            <input type="radio" :name="`${item.Pro_id}`" class="btn-check" v-model="AddCart" :value="`${item.Pro_id}`" :id="`${item.Pro_id}`">
                            <label class="btn btn-outline-primary w-100 m-0 p-2 fs-4 fw-bold font1" :for="`${item.Pro_id}`">{{ item.size }}</label>
                        </div>
                    </div>
                    <div class="row" v-else>
                        <p class="text-center fw-bold fs-4 mt-5 text-danger">Sold out!</p>
                    </div>
                    <div class="row mt-4">
                        <div class="col-10">
                            <button class="btn btn-primary w-100 rounded-5 fw-bold font1" @click="Cart()" type="submit">Add to cart</button>
                        </div>
                        <div class="col-2" >
                            <input type="checkbox" @click="AddFavor()" v-model="favorite" class="btn-check m-0" id="btn-check-outlined" autocomplete="off">
                            <label class="btn btn-outline-primary rounded-5 fw-bold m-0 p-0" for="btn-check-outlined">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 54 54" fill="none">
                                    <circle cx="27" cy="27" r="26.5" fill="#5E17EB" fill-opacity="0.19" />
                                    <path d="M34.1011 11.3022C31.0859 11.3022 28.3873 12.9494 26.7048 15.4762C25.0223 12.9494 22.3236 11.3022 19.3084 11.3022C14.1943 11.3022 10.0464 15.9816 10.0464 21.7652C10.0464 23.9925 10.3629 26.0515 10.9126 27.9607C13.5446 37.3193 21.6573 42.9157 25.6719 44.4505C26.2383 44.6751 27.1712 44.6751 27.7376 44.4505C31.7522 42.9157 39.8649 37.3193 42.4969 27.9607C43.0466 26.0515 43.3631 23.9925 43.3631 21.7652C43.3631 15.9816 39.2152 11.3022 34.1011 11.3022Z" fill="white"/>
                                </svg>
                            </label>
                        </div>
                        <!-- <div class="col-2" v-else>
                            <input type="checkbox" @click="DeleteFavor()" v-model="favorite" class="btn-check m-0" id="btn-check-outlined" autocomplete="off">
                            <label class="btn btn-outline-primary rounded-5 fw-bold m-0 p-0" for="btn-check-outlined">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 54 54" fill="none">
                                    <circle cx="27" cy="27" r="26.5" fill="#5E17EB" fill-opacity="0.19" />
                                    <path d="M34.1011 11.3022C31.0859 11.3022 28.3873 12.9494 26.7048 15.4762C25.0223 12.9494 22.3236 11.3022 19.3084 11.3022C14.1943 11.3022 10.0464 15.9816 10.0464 21.7652C10.0464 23.9925 10.3629 26.0515 10.9126 27.9607C13.5446 37.3193 21.6573 42.9157 25.6719 44.4505C26.2383 44.6751 27.1712 44.6751 27.7376 44.4505C31.7522 42.9157 39.8649 37.3193 42.4969 27.9607C43.0466 26.0515 43.3631 23.9925 43.3631 21.7652C43.3631 15.9816 39.2152 11.3022 34.1011 11.3022Z" fill="white"/>
                                </svg>
                            </label>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const Swal = require('sweetalert2')
export default{
    layout: "navbar",
    head() {
      return {
        title: '2TSneaker | Detail',
      }
    },
    data() {
        return {
            UserID : "",
            id: "",
            fa_id: "",
            name: "",
            shoes :{},
            sizeShout: [],
            BuySize: [],
            favorite: false,
            AddPro_id: "",
            AddCart: null
        }
    },
    methods: {
        GetShoes() {
            const axios = require('axios');

            let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://twotsneaker.onrender.com/product/all',
            headers: { }
            };

            axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                const arrSize = [];
                let AllShoes = response.data;
                AllShoes.forEach(e => {
                    if (e.Pro_id == this.id) {
                        this.shoes = e;
                    }
                });
                AllShoes.forEach(e => {
                    if (e.name === this.shoes.name) {
                        arrSize.push(e)
                    }
                });
                this.sizeShout = [...new Set(arrSize)]
            })
            .catch((error) => {
                console.log(error);
            });

        },
        Cart() {
        Swal.fire({
            title: 'คุณต้องการเพิ่มเข้าสู่ตระกร้าใช่ไหม',
            // text: 'Do you want to add to cart ?',
            imageUrl: this.shoes.image,
            // imageWidth: 400,
            // imageHeight: 200,
            imageAlt: 'shoes image',
            confirmButtonText: 'ตกลง'
        }).then((result) => {
            if (result.isConfirmed) {
                
                const axios = require('axios');
                this.sizeShout.forEach(element => {
                    if (element.Pro_id == this.AddCart) {
                        console.log(element)
                        let data = JSON.stringify({
                            "UserID": this.UserID,
                            "Pro_id": element.Pro_id,
                            "name": element.name,
                            "price": element.price,
                            "image": element.image,
                            "brand": element.brand,
                            "color": element.color,
                            "amount": element.amount,
                            "types": element.types,
                            "size": element.size
                        });
                        let config = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url: 'https://twotsneaker.onrender.com/cart',
                            headers: { 
                                'Content-Type': 'application/json'
                            },
                            data : data
                        };
                        axios.request(config)
                        .then((response) => {
                            console.log(JSON.stringify(response.data));
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'เพิ่มเข้าสู่ตระกร้าเสร็จสิ้น',
                                showConfirmButton: false,
                                timer: 3000
                            })
                        })
                        .catch((error) => {
                            console.log(error);
                            Swal.fire({
                                title: 'มีบางอย่างผิดปกติ',
                                text: "ระบบขัดข้อง",
                                icon: 'warning',
                                confirmButtonColor: '#3085d6',
                            })
                        });
                    }
                });
                
            }
        })

        },
        AddFavor() {
            Swal.fire({
            title: 'คุณต้องการเพิ่มเข้าสู่สิ่งที่ชอบใช่ไหม',
            // text: 'Do you want to add to cart ?',
            imageUrl: this.shoes.image,
            // imageWidth: 400,
            // imageHeight: 200,
            imageAlt: 'shoes image',
            confirmButtonText: 'ตกลง'
        }).then((result) => {
            if (result.isConfirmed) {
                
                // console.log(this.UserID, this.shoes.name, this.favorite)
                const axios = require('axios');
                let data = JSON.stringify({
                    "UserID": this.UserID,
                    "Pro_id": this.shoes.Pro_id
                });
        
                let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://twotsneaker.onrender.com/product/favorites',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
                };
        
                axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        })

        },
        DeleteFavor() {
            const axios = require('axios');
            let data = JSON.stringify({
            "fa_id": this.fa_id
            });

            let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: 'https://twotsneaker.onrender.com/product/dalete/favorites',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

        }
    },
    mounted() {
        this.UserID = localStorage.getItem("UserID");
        this.id = this.$route.query.id;
        this.GetShoes();
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