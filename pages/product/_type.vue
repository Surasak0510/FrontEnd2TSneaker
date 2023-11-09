<template>
    <div>
        <div class="container-fluid">
            <div class="row gap-2 d-flex justify-content-center mt-5" v-if="shoes.length != 0">
                <div class="col-xs-6 col-sm-4 col-md-3 col-xl-2 align-self-stretch my-3"  v-for="(item , index) in shoes" :key="index">
                    <a :href="`/product/detail?id=${item.Pro_id}`" class="row link-offset-2 link-underline link-underline-opacity-0 link-dark h-100">
                        <div class="col-7 h-100 p-0 d-flex">
                            <img :src="`${item.image}`" style="object-fit: cover; cursor: pointer;" alt="" class="w-100 m-0 my-auto">
                        </div>
                        <div class="col-5 rounded-1 h-100 d-flex align-items-end flex-column" style="border: solid 1px #94979c; cursor: pointer;">
                            <div class="row">
                                <p class="h-100 font1">{{ item.name }}</p>
                            </div>
                            <div class="row mt-auto">
                                <p class="h-100 text-end fw-bold font1 my-0">{{ item.price }} ฿</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row m-5" v-else>
                <marquee behavior="scroll" direction="left">
                    <strong><p class="fw-bold font1 fs-1">Out of stock || สินค้าหมด</p></strong>
                </marquee>
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
            shoes: [],
        }
    },
    head() {
      return {
        title: '2TSneaker | Products',
      }
    },
    methods: {
        product() {
            this.type
            const axios = require('axios');
            console.log(this.type)
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://twotsneaker.onrender.com/product/'+ this.type,
                headers: { }
            };

            axios.request(config)
            .then((response) => {
                const DataShoes = response.data;
                let name = "";
                DataShoes.forEach(element => {
                    element.price = element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    if (name != element.name) {
                        this.shoes.push(element)
                    }
                    name = element.name
                });
                // this.shoes = response.data;
                // console.log(JSON.stringify(response.data));
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
</style>