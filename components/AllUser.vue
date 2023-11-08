<template>
    <div>
        <section class="h-100" style="background-color: #eee;">
            <div class="container h-100 py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-10">

                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h3 class="fw-normal mb-0 text-black font1">All Product</h3>
                        </div>
                        <div class="card rounded-3 mb-4" v-for="(item, index) in DataUser" :key="index">
                            <div class="card-body p-2 btn btn-outline-success m-0" @click="User(item)">
                                <div class="row d-flex p-2 align-items-center">
                                    <div class="col-12 p-2 col-md-1">
                                        <strong>
                                            <p class="text-center m-0">{{ item.UserID }}</p>
                                        </strong>
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

        <b-modal v-model="Show" centered hide-footer :title="`${ShowUser.UserID} : ${ShowUser.Username}`"
            v-if="ShowUser != null">
            <div class="row">
                <div class="col-12">
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">Name</label>
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="ShowUser.Username">
                        </div>
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">Email</label>
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="ShowUser.Email">
                        </div>
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">tel</label>
                        <div class="input-group">
                            <input type="tel" class="form-control" v-model="ShowUser.tel">
                        </div>
                    </div>
                    <div class="row my-2">
                        <label for="basic-url" class="form-label">Status</label>
                        <div class="input-group">
                            <select class="form-select" v-model="ShowUser.Status">
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mx-0 mt-3">
                        <div class="col-12 gap-3">
                            <button type="button" class="btn btn-danger" @click="Show = false">cancle</button>
                            <button type="button" class="btn btn-success" @click="EditUser()">save</button>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
export default {
    name: 'AllUser',
    data() {
        return {
            DataUser: null,
            Show: false,
            ShowUser: null
        }
    },
    methods: {
        EditUser() {
            const axios = require('axios');
            let data = JSON.stringify({
                "Username": this.ShowUser.Username,
                "Email": this.ShowUser.Email,
                "tel": this.ShowUser.tel,
                "Status": this.ShowUser.Status
            });

            console.table(data)

            let config = {
                method: 'patch',
                maxBodyLength: Infinity,
                url: `https://twotsneaker.onrender.com/update/profile/${this.ShowUser.UserID}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    this.Show = false
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        User(item) {
            this.ShowUser = item
            this.Show = true
        },
        getUser() {
            const axios = require('axios');

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://twotsneaker.onrender.com/read',
                headers: {}
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