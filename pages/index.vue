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
              <a :href="`/product/detail?id=${item.id}`">
                <div class="col-8 col-md-12 product">
                  <img  :src="`${item.img}`" style="object-fit: cover; cursor: pointer;" alt="" class="h-100 d-block mx-auto">
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
              <a :href="`/product/detail?id=${item.id}`">
                <div class="col-md-12 product">
                  <img  :src="`${item.img}`" style="object-fit: cover; cursor: pointer;" alt="" class="h-100 d-block mx-auto">
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
      shoes: [
        {
          id: "1",
          name : "YEEZY 350 V.2 BLACK RED" ,
          img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248209985536/testShoes.png?ex=653fc775&is=652d5275&hm=15f8be83723d3eac23fb5a60eea0d9dfbcf5081712ce03d1db1c7fbaf9026b19&"
        },
        {
          id: "2",
          name : "NIKE JORDAN1 HIGH DIOR" ,
          img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248646197298/testShoes2.png?ex=653fc775&is=652d5275&hm=2206c9c5d8a7bb8b02e789d9007e8879a96d8e32e8158c4a13fad55fdb587e8b&"
        },        
        {
          id: "3",
          name : "NIKE RETRO HIGH OG CHICAGO" ,
          img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248994320504/testShoes3.png?ex=653fc775&is=652d5275&hm=55f4bbaf567ee50741dae812ab294c4d45e821c04565580f30b139b93ae5d6e5&"
        },
      ],
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
