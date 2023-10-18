<template>
    <div>
        {{ this.id }}
    </div>
</template>

<script>
export default{
    data() {
        return {
            id: "",
            shoes :
                {
                id: "1",
                name : "YEEZY 350 V.2 BLACK RED" ,
                img  : "https://cdn.discordapp.com/attachments/1150377622820368424/1163494248209985536/testShoes.png?ex=653fc775&is=652d5275&hm=15f8be83723d3eac23fb5a60eea0d9dfbcf5081712ce03d1db1c7fbaf9026b19&",
                type: "NewAndOutstanding"
                }
        }
    },
    mounted() {
        this.id = this.$route.query.id;
    }
}
</script>