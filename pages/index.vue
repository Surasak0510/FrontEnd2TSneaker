<template>
  <div class="container">
    <div class="row mx-0 my-3">
      <hooper class="p-0 promotion" :progress="true" :autoPlay="true" :playSpeed="4000" :infiniteScroll="true">
        <slide v-for="(item , index) in promotion" :key="index">
          <a href=""><img :src="`${item.img}`" style="object-fit: cover;" class="d-block mx-auto h-100" alt="..." /></a>
        </slide>
      </hooper>
    </div>
    <div class="row my-4">
      <strong><h3 class="fw-bold font1">Shoes</h3></strong>
    </div>
    <div class="row py-3 d-none d-md-block">
      <hooper :itemsToShow="3" :progress="true" :autoPlay="true" :playSpeed="5000" class="py-3" :infiniteScroll="true" style="box-shadow: 0px -25px 20px -20px #94979c, 0px 25px 20px -20px #94979c;">
        <slide v-for="(item , index) in shoes" :key="index" >
          <div class="col-12 ">
            <div class="row">
              <a :href="`/product/detail?id=${item.Pro_id}`">
                <div class="col-8 col-md-12 product">
                  <img  :src="`${item.image}`" style="object-fit: cover; cursor: pointer;" alt="" class="h-100 d-block mx-auto">
                </div>
              </a>
            </div>
            <div class="row">
              <div class="col-4 col-md-12 d-flex align-content-center flex-wrap ">
                <strong class="w-100"><p class="text-center font1">{{ item.name }}</p></strong>
              </div>
            </div>
          </div>
        </slide>
      </hooper>
    </div>
    <div class="row d-sm-block d-md-none d-lg-none">
      <hooper :itemsToShow="1" :progress="true" :autoPlay="true" :playSpeed="5000" class="py-3" :infiniteScroll="true" style="box-shadow: 0px -25px 20px -20px #94979c, 0px 25px 20px -20px #94979c;">
        <slide v-for="(item , index) in shoes" :key="index" >
          <div class="col-12">
            <div class="row">
              <a :href="`/product/detail?id=${item.Pro_id}`">
                <div class="col-md-12 product">
                  <img  :src="`${item.image}`" style="object-fit: cover; cursor: pointer;" alt="" class="h-100 d-block mx-auto">
                </div>
              </a>
            </div>
            <div class="row">
              <div class="col-12 d-flex align-content-center">
                <strong class="w-100"><p class="text-center font1">{{ item.name }}</p></strong>
              </div>
            </div>
          </div>
        </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  layout: "navbar",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      shoes: [],
      promotion: [
        {
          img : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494247601819729/testpromo.png?ex=653fc775&is=652d5275&hm=8f881b8ae0d1f1cc46d0d48c6f1b7bc5f73607f90815cee0c5bc8de91b003bfa&"
        },
        {
          img : "https://cdn.discordapp.com/attachments/882572081861099543/1163498896488661042/image.png?ex=653fcbc9&is=652d56c9&hm=9a3814645c832215956ff38ffca4a2f6e5736429b5942c26bbe96fc45c985b20&"
        },
        {
          img : "https://cdn.discordapp.com/attachments/882572081861099543/1163498950024757338/393472142_736777368482437_2853967904747238148_n.png?ex=653fcbd6&is=652d56d6&hm=3ecdcc0c398bbf0ccd7037cdbd82d0d9ba1974e5bf1863273899258072f037e3&"
        },
      ]
    }
  },
  methods : {
    GetShoes() {
      const axios = require('axios');

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://twotsneaker.onrender.com/product/all',
        headers: { }
      };

      axios.request(config)
      .then((response) => {
        const DataShoes = response.data;
        let name = "";
        DataShoes.forEach(element => {
          if (name != element.name) {
              this.shoes.push(element)
          }
          name = element.name
        });
        // console.log(JSON.stringify(response.data));
        // this.shoes = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    }
  },
  mounted() {
    this.GetShoes();
  }
};
</script>

<style scoped>
.promotion {
    height: 150px;
}
.product {
      height: 100px;
}
@media (min-width: 576px) { 
    .promotion {
        height: 200px;
    }
    .product {
      height: 100px;
    }
 }

@media (min-width: 768px) { 
    .promotion {
        height: 200px;
    }
    .product {
      height: 150px;
    }
 }

@media (min-width: 992px) { 
    .promotion {
        height: 250px;
    }
    .product {
      height: 150px;
    }
 }

@media (min-width: 1200px) { 
    .promotion {
        height: 250px;
    }
 }

@media (min-width: 1400px) { 
    .promotion {
        height: 300px;
    }
 }
</style>
