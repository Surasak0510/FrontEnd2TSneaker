<template>
    <div>
        <section class="h-100" style="background-color: #eee;">
            <div class="container h-100 py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-10">

                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h3 class="fw-normal mb-0 text-black font1">Shopping Cart</h3>
                        </div>
                        <div class="card rounded-3 mb-4" v-for="(item, index) in DataShoes" :key="index">
                            <div class="card-body p-4">
                                <div class="row d-flex justify-content-between align-items-center">
                                    <a :href="`/product/detail?id=${item.Pro_id}`" class="col-md-2 col-lg-2 col-xl-2">
                                        <img :src="`${item.image}`" class="img-fluid rounded-3" alt="Cotton T-shirt">
                                    </a>
                                    <div class="col-md-5 col-lg-5 col-xl-5">
                                        <p class="lead fw-normal mb-2 font1">{{ item.name }}</p>
                                        <p><span class="text-muted">Size: </span>{{ item.size }} <span
                                                class="text-muted">Color:
                                            </span><span class="fw-bold" :style="`color:${item.color}`">{{ item.color
                                            }}</span></p>
                                    </div>
                                    <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1 d-flex w-100 mb-3">
                                        <h5 class="mb-0 font1 text-end w-100">{{ item.price }} ฿</h5>
                                    </div>
                                    <div class="col-md-1 col-lg-1 col-xl-1 col-6 text-end">
                                        <button class="btn btn-outline-success fw-bold m-0" @click="EditProduct(item)">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                                <path
                                                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="col-md-1 col-lg-1 col-xl-1 col-6 text-end">
                                        <button class="btn btn-outline-danger fw-bold m-0"
                                            @click="DeleteProducts(item.Pro_id)"> X </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <b-modal v-model="show" :title="Product.name">
            <div class="row">
                <div class="col-12">
                    <div class="row my-2 d-flex justify-content-center">
                        <img :src="Product.image" alt="" style="width: 200px;">
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">Name</label>
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="Product.name">
                        </div>
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">Color</label>
                        <div class="input-group">
                            <input type="color" class="form-control" v-model="Product.color">
                        </div>
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">size</label>
                        <div class="input-group">
                            <input type="number" class="form-control" v-model="Product.size">
                        </div>
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">brand</label>
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="Product.brand">
                        </div>
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">types</label>
                        <div class="input-group">
                            <select class="form-select" v-model="Product.types">
                                <option value="New and Outstanding">New and Outstanding</option>
                                <option value="Limited">Limited</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kid">Kid</option>
                            </select>
                        </div>
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">amount</label>
                        <div class="input-group">
                            <input type="number" class="form-control" v-model="Product.amount">
                        </div>
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">price</label>
                        <div class="input-group">
                            <input type="number" class="form-control" v-model="Product.price">
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        
    </div>
</template>

<script>
const Swal = require('sweetalert2')
export default {
    nema: 'AllProducts',
    data() {
        return {
            UserID: "",
            DataShoes: null,
            Product: null,
            show: false
        }
    },
    methods: {
        EditProduct(item) {
            this.show = true
            this.Product = item
        },
        DeleteProducts(Pro_id) {
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
                        "id": Pro_id
                    });

                    let config = {
                        method: 'delete',
                        maxBodyLength: Infinity,
                        url: 'https://twotsneaker.onrender.com/product/delete',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: data
                    };

                    axios.request(config)

                        .then((response) => {
                            Swal.fire(
                                'เสร็จสิ้น!',
                                'ทำการลบสินค้าเสร็จสิ้น',
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
        GetShoes() {
            const axios = require('axios');

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://twotsneaker.onrender.com/product/all',
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    this.DataShoes = response.data;
                    // console.log(JSON.stringify(response.data));
                    // this.shoes = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });

        }
    },
    mounted() {
        this.UserID = localStorage.getItem("UserID");
        this.GetShoes()
    }
}
</script>