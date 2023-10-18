<template>
    <div>
        {{ type }}
    </div>
</template>

<script>
export default {
    layout: "navbar",
    data() {
        return {
            type: ""
        }
    },
    methods: {

    },
    mounted() {
        this.type = this.$route.params.type;
    }
}
</script>