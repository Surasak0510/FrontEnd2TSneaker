<template>
    <div>
        <div class="container-fluid">
            <div class="row gap-2 d-flex justify-content-center ">
                <div class="col-xs-6 col-sm-4 col-md-3 col-xl-2 align-self-stretch"  v-for="(item , index) in shoes" :key="index">
                    <a :href="`/product/detail?id=${item.id}`" class="row link-offset-2 link-underline link-underline-opacity-0 link-dark">
                        <div class="col-7 h-100">
                            <img :src="`${item.img}`" style="object-fit: cover; cursor: pointer;" alt="" class="w-100 my-auto">
                        </div>
                        <div class="col-5 rounded-1 h-100" style="border: solid 1px #94979c; cursor: pointer;">
                            <p class="h-100">{{ item.name }}</p>
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
            shoes: [
                {
                    id: "1",
                name : "YEEZY 350 V.2 BLACK RED" ,
                img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248209985536/testShoes.png?ex=653fc775&is=652d5275&hm=15f8be83723d3eac23fb5a60eea0d9dfbcf5081712ce03d1db1c7fbaf9026b19&",
                type: "NewAndOutstanding"
                },
                {
                    id: "2",
                name : "NIKE JORDAN1 HIGH DIOR" ,
                img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248646197298/testShoes2.png?ex=653fc775&is=652d5275&hm=2206c9c5d8a7bb8b02e789d9007e8879a96d8e32e8158c4a13fad55fdb587e8b&",
                type: "Limited"
                },        
                {
                    id: "3",
                name : "NIKE RETRO HIGH OG CHICAGO" ,
                img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248994320504/testShoes3.png?ex=653fc775&is=652d5275&hm=55f4bbaf567ee50741dae812ab294c4d45e821c04565580f30b139b93ae5d6e5&",
                type: "NewAndOutstanding"
                },   
                {
                    id: "4",
                name : "YEEZY 350 V.2 BLACK RED" ,
                img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248209985536/testShoes.png?ex=653fc775&is=652d5275&hm=15f8be83723d3eac23fb5a60eea0d9dfbcf5081712ce03d1db1c7fbaf9026b19&",
                type: "Limited"
                },
                {
                    id: "5",
                name : "NIKE JORDAN1 HIGH DIOR" ,
                img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248646197298/testShoes2.png?ex=653fc775&is=652d5275&hm=2206c9c5d8a7bb8b02e789d9007e8879a96d8e32e8158c4a13fad55fdb587e8b&",
                type: "Men"
                },     
                {
                    id: "6",
                name : "NIKE RETRO HIGH OG CHICAGO" ,
                img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248994320504/testShoes3.png?ex=653fc775&is=652d5275&hm=55f4bbaf567ee50741dae812ab294c4d45e821c04565580f30b139b93ae5d6e5&",
                type: "Men"
                },
                {
                    id: "7",
                name : "YEEZY 350 V.2 BLACK RED" ,
                img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248209985536/testShoes.png?ex=653fc775&is=652d5275&hm=15f8be83723d3eac23fb5a60eea0d9dfbcf5081712ce03d1db1c7fbaf9026b19&",
                type: "Kid"
                },
                {
                    id: "8",
                name : "NIKE JORDAN1 HIGH DIOR" ,
                img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248646197298/testShoes2.png?ex=653fc775&is=652d5275&hm=2206c9c5d8a7bb8b02e789d9007e8879a96d8e32e8158c4a13fad55fdb587e8b&",
                type: "Kid"
                },  
            ],
                }
    },
    methods: {
        product() {
            this.type
        }
    },
    mounted() {
        this.type = this.$route.params.type;
    }
}
</script>