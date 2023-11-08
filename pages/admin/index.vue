<template>
    <div class="container">
        <b-card no-body>
            <b-tabs pills card>
                <b-tab title="All User" active>
                    <all-user/>
                </b-tab>
                <b-tab title="All Product">
                    <all-products/>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import AllProducts from '../../components/AllProducts.vue'
import AllUser from '../../components/AllUser.vue'
export default {
  components: { AllUser, AllProducts },
    layout: "navbar",
    data() {
        return {

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
                        // if (this.User.Status == 'USER') {
                        //     window.location = '/'
                        // }
                    }
                    if (element.UserID == this.UserID && element.Status == 'USER') {
                        window.location = '/'
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
    }
}
</script>