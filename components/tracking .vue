<template>
    <div>
        <div class="container px-1 px-md-4 mx-auto">
            <div class="card">
                <div class="row d-flex justify-content-between px-3 top">
                    <div class="d-flex">
                        <h5>ORDER <span class="text-primary font-weight-bold">#{{ pay_id }}</span></h5>
                    </div>
                    <div class="d-flex flex-column text-sm-right">
                        <p class="mb-0">Expected Arrival <span>{{ DateTrack }}</span></p>
                    </div>
                </div>
                <!-- Add class 'active' to progress -->
                <div class="row d-flex justify-content-center">
                    <div class="col-12">
                    <ul id="progressbar" class="text-center">
                        <li class="active step0"></li>
                        <li class="step0"></li>
                        <li class="step0"></li>
                        <li class="step0"></li>
                    </ul>
                    </div>
                </div>
                <div class="row d-flex justify-content-between top">
                    <div class="col-xl-3 col-12 d-flex icon-content">
                        <img class="icon p-0" src="https://i.imgur.com/9nnc9Et.png">
                        <div class="">
                            <p class="font-weight-bold">Order<br>Processed</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-12 d-flex icon-content">
                        <img class="icon p-0" src="https://i.imgur.com/u1AzR7w.png">
                        <div class="">
                            <p class="font-weight-bold">Order<br>Shipped</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-12 d-flex icon-content">
                        <img class="icon p-0" src="https://i.imgur.com/TkPm63y.png">
                        <div class="">
                            <p class="font-weight-bold">Order<br>En Route</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-12 d-flex icon-content">
                        <img class="icon p-0" src="https://i.imgur.com/HdsziHP.png">
                        <div class="">
                            <p class="font-weight-bold">Order<br>Arrived</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tracking',
    data() {
        return {
            track: null,
            pay_id: "",
            DateTrack: ""
        }
    },
    methods: {
        getPay() {
            const axios = require('axios');

            let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://twotsneaker.onrender.com/payments?UserID=43',
            headers: { }
            };

            axios.request(config)
            .then((response) => {
                this.track = response.data[0]
                this.DateTrack = response.data[0].Date
                this.pay_id = response.data[0].pay_id
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

        }
    },
    mounted() {
        this.getPay()
    }
}
</script>

<style scoped>
body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #8C9EFF;
    background-repeat: no-repeat;
}

.card {
    z-index: 0;
    background-color: #ECEFF1;
    padding-bottom: 20px;
    margin-top: 90px;
    margin-bottom: 90px;
    border-radius: 10px;
}

.top {
    padding-top: 40px;
    padding-left: 13% !important;
    padding-right: 13% !important;
}

/*Icon progressbar*/
#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    color: #455A64;
    padding-left: 0px;
    margin-top: 30px;
} 

#progressbar li {
    list-style-type: none;
    font-size: 13px;
    width: 25%;
    float: left;
    position: relative;
    font-weight: 400;
}

#progressbar .step0:before {
    font-family: FontAwesome;
    content: "\f10c";
    color: #fff;
}

#progressbar li:before {
    width: 40px;
    height: 40px;
    line-height: 45px;
    display: block;
    font-size: 20px;
    background: #C5CAE9;
    border-radius: 50%;
    margin: auto;
    padding: 0px;
}

/*ProgressBar connectors*/
#progressbar li:after {
    content: '';
    width: 100%;
    height: 12px;
    background: #C5CAE9;
    position: absolute;
    left: 0;
    top: 16px;
    z-index: -1;
}

#progressbar li:last-child:after {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    left: -50%;
}

#progressbar li:nth-child(2):after, #progressbar li:nth-child(3):after {
    left: -50%;
}

#progressbar li:first-child:after {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    left: 50%;
}

#progressbar li:last-child:after {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

#progressbar li:first-child:after {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

/*Color number of the step and the connector before it*/
#progressbar li.active:before, #progressbar li.active:after {
    background: #651FFF;
}

#progressbar li.active:before {
    font-family: FontAwesome;
    content: "\f00c";
}

.icon {
    width: 60px;
    height: 60px;
    margin-right: 15px;
}

.icon-content { 
    padding-bottom: 20px;
}

@media screen and (max-width: 992px) {
    .icon-content {
        width: 50%;
    }
}
</style>