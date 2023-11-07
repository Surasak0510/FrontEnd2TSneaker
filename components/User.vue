<template>
    <div>
        <section style="background-color: #eee;">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Full Name</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ User.Username }}</p>
                            </div>
                            </div>
                            <hr>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Email</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ User.Email }}</p>
                            </div>
                            </div>
                            <hr>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Phone</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ User.tel }}</p>
                            </div>
                            </div>
                            <hr>
                            <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Address</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0" v-if="Location == null"> - </p>
                                <p class="text-muted mb-0" v-else>{{ Location.district }} {{ Location.province }} {{ Location.country }} {{ Location.postcode }}</p>
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
  name: 'User',
  data() {
    return{
        User: {},
        Location: null,
    }
  },
  methods: {
    getLoc() {
        const axios = require('axios');

        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://twotsneaker.onrender.com/location/user?UserID=${this.UserID}`,
        headers: { }
        };

        axios.request(config)
        .then((response) => {
            this.Location = response.data[0];
            // console.log(JSON.stringify(response.data[0]));
        })
        .catch((error) => {
            console.log(error);
        });

    },
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
  },
    mounted() {
        this.UserID = localStorage.getItem("UserID");
        this.getUser()
        this.getLoc()
    }
}
</script>