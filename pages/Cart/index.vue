<template>
    <div>
        <section class="h-100" style="background-color: #eee;">
            <div class="container h-100 py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-10">

                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h3 class="fw-normal mb-0 text-black font1">Shopping Cart</h3>
                        </div>
                        <div class="card rounded-3 mb-4" v-for="(item,index) in Cart" :key="index">
                            <div class="card-body p-4">
                                <div class="row d-flex justify-content-between align-items-center">
                                    <a :href="`/product/detail?id=${item.Pro_id}`" class="col-md-2 col-lg-2 col-xl-2">
                                        <img :src="`${item.image}`" class="img-fluid rounded-3" alt="Cotton T-shirt">
                                    </a>
                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                        <p class="lead fw-normal mb-2 font1">{{ item.name }}</p>
                                        <p><span class="text-muted">Size: </span>{{ item.size }} <span class="text-muted" >Color:
                                            </span ><span class="fw-bold" :style="`color:${item.color}`">{{ item.color }}</span></p>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex gap-2 mb-3">
                                        <!-- <button class="btn m-0" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                            -
                                        </button> -->

                                        <input id="form1" min="0" readonly name="quantity" value="1" type="number" class="form-control text-center font1 fw-bold" />

                                        <!-- <button class="btn m-0" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                            <span>
                                                +
                                            </span>
                                        </button> -->
                                    </div>
                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1 d-flex w-100 mb-3">
                                        <h5 class="mb-0 font1 text-end w-100">{{ item.price }} ฿</h5>
                                    </div>
                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <button class="btn btn-outline-danger fw-bold" @click="DeleteCart(item.CartID)"> X </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="card mb-4">
                            <div class="card-body p-4 d-flex flex-row">
                                <div class="form-outline flex-fill">
                                    <input type="text" id="form1" placeholder="Discound code" class="form-control form-control-lg" />
                                    <label class="form-label" for="form1">Discound code</label>
                                </div>
                                <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
                            </div>
                        </div> -->

                        <div class="card">
                            <div class="card-body">
                                <a type="button" href="/cart/pay" class="btn btn-warning btn-block btn-lg">Proceed to Pay</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
const Swal = require('sweetalert2')
export default{
    layout: "navbar",
    data() {
        return {
            UserID: "",
            Cart: [],
            CartUser: [],
            ValueProduct: 1
        }
    },
    methods: {
        DeleteCart(CartID) {
            Swal.fire({
                title: 'คุณต้องการลบใช่ไหม',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ยืนยัน',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
            if (result.isConfirmed) {
                const axios = require('axios');
                let data = JSON.stringify({
                "CartID": CartID
                });

                let config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: 'https://twotsneaker.onrender.com/cart/delete',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
                };

                axios.request(config)
                .then((response) => {
                    Swal.fire(
                        'เสร็จสิ้น!',
                        'ทำการลบสินค้าออกจากตระกร้า',
                        'success'
                    )
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                    // console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                console.log(error);
                });

            }
            })
        },
        getCart() {
            const axios = require('axios');
            let data = '';
            let dataCart = null;

            let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://twotsneaker.onrender.com/cart/all',
            headers: { },
            data : data
            };

            axios.request(config)
            .then((response) => {
                this.Cart = response.data;
                this.Cart.forEach(element => {
                    // console.log(element);
                    element.price = element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                });
                // console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
            console.log(error);
            });
        },
    },
    mounted() {
        this.UserID = localStorage.getItem("UserID");
        this.getCart()
    }
}
</script>