<template>
    <div>
        <div class="container">
            <div class="row m-0 gap-4 d-flex justify-content-center">
                <div class="col-md-6 col-12">
                    <div class="row">
                        <div class="col-12 mb-4">
                            <div class="row box-right">
                                <div class="col-md-8 ps-0 ">
                                    <p class="ps-3 textmuted fw-bold h6 mb-0">TOTAL RECIEVED</p>
                                    <p class="h1 fw-bold d-flex"> 
                                        <span class=" fas fa-dollar-sign textmuted pe-1 h6 align-text-top mt-1"></span>
                                        {{ STRprice }}
                                    </p>
                                    <!-- <p class="ms-3 px-2 bg-green">+10% since last month</p> -->
                                </div>
                                <div class="col-md-4">
                                    <p class="p-blue"> <span class="fas fa-circle pe-2"></span>Sub total <br>(full payment) </p>
                                    <p class="fw-bold mb-3"><span class="fas fa-dollar-sign pe-1"></span>{{ STRprice }} ฿</p>
                                    <p class="p-org"><span class="fas fa-circle pe-2"></span>Shipping free</p>
                                    <p class="fw-bold"><span class="fas fa-dollar-sign pe-1"></span>100 ฿</p>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="col-12 px-0 mb-4">
                            <div class="box-right">
                                <div class="d-flex pb-2">
                                    <p class="fw-bold h7"><span class="textmuted">quickpay.to/</span>Publicnote</p>
                                    <p class="ms-auto p-blue"><span
                                            class=" bg btn btn-primary fas fa-pencil-alt me-3"></span> <span
                                            class=" bg btn btn-primary far fa-clone"></span> </p>
                                </div>
                                <div class="bg-blue p-2">
                                    <P class="h8 textmuted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                        recusandae dolorem voluptas nemo, modi eos minus nesciunt.
                                    <p class="p-blue bg btn btn-primary h8">LEARN MORE</p>
                                    </P>
                                </div>
                            </div>
                        </div> -->

                        <div class="col-12 px-0">
                            <div class="box-right">
                                <div class="card rounded-3 mb-4" v-for="(item,index) in Cart" :key="index">
                                    <div class="card-body p-4">
                                        <div class="row d-flex justify-content-between align-items-center">
                                            <a :href="`/product/detail?id=${item.Pro_id}`" class="col-md-5 col-lg-5 col-xl-5">
                                                <img :src="`${item.image}`" class="img-fluid rounded-3" alt="Cotton T-shirt">
                                            </a>
                                            <div class="col-md-7 col-lg-7 col-xl-7">
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                                        <p class="lead fw-normal mb-2 font1">{{ item.name }}</p>
                                                        <p><span class="text-muted">Size: </span>{{ item.size }} <span class="text-muted" >Color:
                                                            </span ><span class="fw-bold" :style="`color:${item.color}`">{{ item.color }}</span></p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6 col-xl-6 d-flex gap-2 mb-6">
                                                        <input id="form1" min="0" readonly name="quantity" value="1" type="number" class="form-control text-center font1 fw-bold" />
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-xl-6 offset-lg-1 d-flex w-100 mb-3">
                                                        <h5 class="mb-0 font1 text-end w-100">{{ item.price }} ฿</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-5 col-12 ps-md-5 p-0 sticky">
                    <div class="box-left"  style="position: sticky; top: 35px;">
                        <p class="textmuted h8">Invoice</p>
                        <p class="fw-bold h7">{{ User.Username }}</p>
                        <p class="textmuted h8">3897 Hickroy St, salt Lake city</p>
                        <p class="textmuted h8 mb-2">Utah, United States 84104</p>
                        <div class="h8 py-2">
                            <div class="row" v-for="(item,index) in Cart" :key="index">
                                <div class=" col-9 p-2 border" >
                                    <p class="textmuted">
                                        {{ item.name }}
                                    </p>
                                </div>
                                <div class=" col-3 border d-flex align-items-center" >
                                    <p class="text-center w-100 textmuted">
                                        {{ item.price }}
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex h7 my-2">
                                <p class="">Total Amount</p>
                                <p class="ms-auto">{{ STRprice }} ฿</p>
                            </div>
                        </div>
                        <div class="">
                            <p class="h7 fw-bold mb-1">Pay this Invoice</p>
                            <p class="textmuted h8 mb-2">Make payment for this invoice by filling in the details</p>
                            <div class="form">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card border-0"> 
                                            <input class="form-control" type="text" placeholder="Card number">
                                        </div>
                                    </div>
                                    <div class="col-6"> 
                                        <input class="form-control my-3" type="text" placeholder="MM/YY">
                                    </div>
                                    <div class="col-6"> 
                                        <input class="form-control my-3" type="text" placeholder="cvv">
                                    </div>
                                    <!-- <p class="p-blue h8 fw-bold mb-3">MORE PAYMENT METHODS</p> -->
                                </div>
                                <div class="btn btn-primary d-block h8">
                                    PAY ฿ 
                                    <span class="fas fa-dollar-sign ms-2">
                                    </span>
                                    {{ STRTotlePrice }} 
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <style>svg{fill:#ffffff}</style>
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const Swal = require('sweetalert2')
export default {
    layout: "navbar",
    data() {
        return {
            UserID: "",
            Cart: [],
            CartUser: [],
            ValueProduct: 1,
            price: 0,
            STRprice: "",
            User: {},
            STRTotlePrice: "",
        }
    },
    methods: { 
        getUser() {
            const axios = require('axios');

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://twotsneaker.onrender.com/read',
                headers: { }
            };

            axios.request(config)
            .then((response) => {
                let DataUser = response.data;
                DataUser.forEach(element => {
                    if (element.UserID == this.UserID) {
                        this.User = element;
                    }
                });
                // console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

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
                    this.price += element.price;
                    element.price = element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                });
                this.STRTotlePrice = (this.price + 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                this.STRprice = this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
        this.getUser()
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif
}

p {
    margin: 0
}

.container {
    max-width: 900px;
    margin: 30px auto;
    background-color: #e8eaf6;
    padding: 35px;
}

.box-right {
    padding: 30px 25px;
    background-color: white;
    border-radius: 15px
}

.box-left {
    padding: 20px 20px;
    background-color: white;
    border-radius: 15px
}

.textmuted {
    color: #7a7a7a
}

.bg-green {
    background-color: #d4f8f2;
    color: #06e67a;
    padding: 3px 0;
    display: inline;
    border-radius: 25px;
    font-size: 11px
}

.p-blue {
    font-size: 14px;
    color: #1976d2
}

.fas.fa-circle {
    font-size: 12px
}

.p-org {
    font-size: 14px;
    color: #fbc02d
}

.h7 {
    font-size: 15px
}

.h8 {
    font-size: 12px
}

.h9 {
    font-size: 10px
}

.bg-blue {
    background-color: #dfe9fc9c;
    border-radius: 5px
}

.form-control {
    box-shadow: none !important
}

.card input::placeholder {
    font-size: 14px
}

::placeholder {
    font-size: 14px
}

input.card {
    position: relative
}

.far.fa-credit-card {
    position: absolute;
    top: 10px;
    padding: 0 15px
}

.fas,
.far {
    cursor: pointer
}

.cursor {
    cursor: pointer
}

.btn.btn-primary {
    box-shadow: none;
    height: 40px;
    padding: 11px
}

.bg.btn.btn-primary {
    background-color: transparent;
    border: none;
    color: #1976d2
}

.bg.btn.btn-primary:hover {
    color: #539ee9
}

@media(max-width:320px) {
    .h8 {
        font-size: 11px
    }

    .h7 {
        font-size: 13px
    }

    ::placeholder {
        font-size: 10px
    }
}
</style>