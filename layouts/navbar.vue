<template>
    <div>
        <div class="row mx-0" >
            <nav class="navbar navbar-expand-lg bg-body-tertiary py-2" style="box-shadow: 0 2px 4px 0 #94979c;">
                <div class="container-fluid">
                    <div class="col-md-4 d-none d-md-block">
                        <a class="navbar-brand m-0 p-0" href="/"><img src="~/static/logo.png" style="height: 55px;" alt=""></a>
                    </div>
                    <div class="col-md-4 d-none d-md-block">
                        <!-- <form class="container-fluid ">
                            <div class="input-group">
                                <input type="text" class="form-control rounded-start-pill" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                                <span class="input-group-text p-0 rounded-end-pill" id="basic-addon1"><a class="link-offset-2 link-underline link-underline-opacity-0"><img src="../static/icon/search.svg" alt=""></a></span>
                            </div>
                        </form> -->
                        <form action="">
                            <div class="input-group">
                                <input type="text" class="form-control rounded-start-pill p-3 " v-model="search" placeholder="search" aria-label="search" aria-describedby="basic-addon1">
                                <span class="input-group-text px-1 rounded-end-pill" id="basic-addon1" @click="SearchPro()" style="cursor: pointer;"><img src="../static/icon/search.svg" alt=""></span>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md-4 my-2">
                        <div class="row ">
                            <div class="col-12 d-flex justify-content-end">
                                <a type="button" href="/favor" class="btn position-relative mx-3" style="box-shadow: none;">
                                    <img src="../static/icon/heart.svg" alt="">  
                                    <span v-if="heart != 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        <span class="fw-light" v-if="heart <= 99">{{ heart }}</span>
                                        <span class="fw-light" v-else>99+</span>
                                        <span class="visually-hidden">heart</span>
                                    </span>
                                </a>
                                <a type="button" href="/cart" class="btn position-relative mx-3" style="box-shadow: none;">
                                    <img src="../static/icon/shopping_cart.svg" alt="">  
                                    <span v-if="cart != 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        <span class="fw-light" v-if="cart <= 99">{{ cart }}</span>
                                        <span class="fw-light" v-else>99+</span>
                                        <span class="visually-hidden">shopping cart</span>
                                    </span>
                                </a>
                                <a type="button" class="btn position-relative mx-3" style="box-shadow: none;" href="/setting">
                                    <img src="../static/icon/profile_circle.svg" alt="" v-if="user.img == null">
                                    <img :src="`${user.img}`" alt="" style="width: 35px; height: 35px;" class="rounded-circle mx-auto" v-else>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-sm-block d-md-none">
                        <form action="">
                            <div class="input-group">
                                <input type="text" class="form-control rounded-start-pill p-3 " v-model="search" placeholder="search" >
                                <button class=" input-group-text px-1 rounded-end-pill" @click="SearchPro()"  id="basic-addon1" style="cursor: pointer;"><img src="../static/icon/search.svg" alt=""></button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        <!-- <div class="container"> -->
            <div class="row mx-0 pt-3 py-3">
                <div class="col-12">
                    <div class="row py-2 ">
                        <div class="col-5 p-0 col-md">
                            <p class="w-100 m-0 text-center"><a href="/" style="box-shadow: none; border-radius: 25px;" class="btn navhover mx-0 fw-bold fs-5 font1" type="link" value="Home">Home</a></p>
                        </div>
                        <div class="col-7 p-0 col-md">
                            <p class="w-100 m-0 text-center"><a href="../product/New and Outstanding" style="box-shadow: none; border-radius: 25px;" class="btn navhover mx-0 fw-bold fs-5 font1" type="link" value="New and Outstanding">New and Outstanding</a></p>
                        </div>
                        <div class="col-3 p-0 col-md">
                            <p class="w-100 m-0 text-center"><a href="../product/Limited" style="box-shadow: none; border-radius: 25px;" class="btn navhover mx-0 fw-bold fs-5 font1" type="link" value="Limited">Limited</a></p>
                        </div>
                        <div class="col-3 p-0 col-md">
                            <p class="w-100 m-0 text-center"><a href="../product/Men" style="box-shadow: none; border-radius: 25px;" class="btn navhover mx-0 fw-bold fs-5 font1" type="link" value="Men">Men</a></p>
                        </div>
                        <div class="col-3 p-0 col-md">
                            <p class="w-100 m-0 text-center"><a href="../product/Women" style="box-shadow: none; border-radius: 25px;" class="btn navhover mx-0 fw-bold fs-5 font1" type="link" value="Women">Women</a></p>
                        </div>
                        <div class="col-3 p-0 col-md">
                            <p class="w-100 m-0 text-center"><a href="../product/Kid" style="box-shadow: none; border-radius: 25px;" class="btn navhover mx-0 fw-bold fs-5 font1" type="link" value="Kid">Kid</a></p>
                        </div>
                        <div class="col-3 p-0 col-md" v-if="user.Status == 'ADMIN'">
                            <p class="w-100 m-0 text-center"><a href="/admin" style="box-shadow: none; border-radius: 25px; border: none;" class="btn btn-outline-danger mx-0 fw-bold fs-5 font1" type="link" >ADMIN</a></p>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
        <nuxt/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            heart: 0 ,
            cart : 0 ,
            UserID: "",
            user : {},
            search: ""
        }
    },
    methods: {
        SearchPro() {
            const axios = require('axios');
            
            const config = {
                method: 'get',
                url: `https://twotsneaker.onrender.com/product/search?name=${this.search}`,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    // console.log("search >>>>", JSON.stringify(response.data));
                    window.location = `/product/detail?id=${response.data.Pro_id}`
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        GetUser() {
            const axios = require('axios');
            let data = JSON.stringify({"UserID": this.UserID});

            let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://twotsneaker.onrender.com/read',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios.request(config)
            .then((response) => {
                let members = response.data
                members.forEach(e => {
                    if (e.UserID == this.UserID) {
                        this.user = e;
                        // console.log(e);
                    }
                });
                // console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.UserID = localStorage.getItem("UserID");
        if (this.UserID === null) {
            window.location = '/login'
        }
        this.GetUser();

    }
}
</script>

<style scoped>
.navhover {
    color: black;
}
.navhover:hover {
    background-color: #94979c;
    color: white;
}
ื.navhover:focus {
    background: #94979c;
}

</style>