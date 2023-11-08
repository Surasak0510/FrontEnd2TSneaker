<template>
    <div>
        <section class="h-100" style="background-color: #eee;">
            <div class="container h-100 py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-10">

                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h3 class="fw-normal mb-0 text-black font1">All Product</h3>
                        </div>
                        <div class="card rounded-3 mb-4" v-for="(item,index) in DataUser" :key="index">
                            <div class="card-body p-4">
                                <div class="row d-flex p-2 align-items-center">
                                    <div class="col-12 p-2 col-md-1">
                                        <strong><p class="text-center m-0">{{ item.UserID }}</p></strong>
                                    </div>
                                    <div class="col-12 p-2 col-md-3">
                                        <p class="m-0 text-center">{{ item.Username }}</p>
                                    </div>
                                    <div class="col-12 p-2 col-md-4">
                                        <p class="m-0 text-center">{{ item.Email }}</p>
                                    </div>
                                    <div class="col-12 p-2 col-md-2">
                                        <p class="m-0 text-center">{{ item.tel }}</p>
                                    </div>
                                    <div class="col-12 p-2 col-md-2">
                                        <p class="m-0 text-center">{{ item.Status }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AllUser',
    data() {
        return {
            DataUser: null
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
                this.DataUser = response.data;
                // console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

        },
    },
    mounted() {
        this.UserID = localStorage.getItem("UserID");
        this.getUser()
    }
}
</script>