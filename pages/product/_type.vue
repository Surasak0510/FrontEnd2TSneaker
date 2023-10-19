<template>
    <div>
        <div class="container-fluid">
            <div class="row gap-2 d-flex justify-content-center mt-5">
                <div class="col-xs-6 col-sm-4 col-md-3 col-xl-2 align-self-stretch my-3"  v-for="(item , index) in shoes" :key="index">
                    <a :href="`/product/detail?id=${item.Pro_id}`" class="row link-offset-2 link-underline link-underline-opacity-0 link-dark">
                        <div class="col-7 h-100 p-0">
                            <img :src="`${item.image}`" style="object-fit: cover; cursor: pointer;" alt="" class="w-100 m-0 ">
                        </div>
                        <div class="col-5 rounded-1 h-100" style="border: solid 1px #94979c; cursor: pointer;">
                            <div class="row">
                                <p class="h-100 font1">{{ item.name }}</p>
                            </div>
                            <div class="row">
                                <p class="h-100 text-end fw-bold font1">{{ item.price }} ฿</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "navbar",
    data() {
        return {
            type: "",
            shoes: null,
        }
    },
    methods: {
        product() {
            this.type
            const axios = require('axios');

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://twotsneaker.onrender.com/product/'+ this.type,
                headers: { }
            };

            axios.request(config)
            .then((response) => {
                this.shoes = response.data;
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

        }
    },
    mounted() {
        this.type = this.$route.params.type;
        this.product();
    }
}
</script>