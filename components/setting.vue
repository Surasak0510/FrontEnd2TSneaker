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
                                        <input class="text-muted mb-0 form-control" v-model="Username">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Email</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <input class="text-muted mb-0 form-control" v-model="Email">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Phone</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <input class="text-muted mb-0 form-control" v-model="tel">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Country</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <input class="text-muted mb-0 form-control" v-model="country">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Province</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <input class="text-muted mb-0 form-control" v-model="province">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">District</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <input class="text-muted mb-0 form-control" v-model="district">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Postcode</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <input class="text-muted mb-0 form-control" v-model="postcode">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row px-3">
                    <button type="button" class="btn btn-primary" @click="Update()">save</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
const Swal = require('sweetalert2')
export default {
  name: 'UserSetting',
  data() {
    return{
        UserID: "",
        User: {},
        Location: {},
        Username: "",
        Email: "",
        tel: "",
        country: "",
        province: "",
        district: "",
        postcode: ""
    }
  },
  methods: {
    async Update() {
        if (
            this.Username.length == 0 ||
            this.Email.length == 0 ||
            this.tel.length == 0 ||
            this.country.length == 0 ||
            this.province.length == 0 ||
            this.district.length == 0 ||
            this.postcode.length == 0
        ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No information found!",
            });
        } else {
            try {
                const axios = require('axios');

                // อัปเดตข้อมูลผู้ใช้
                let dataUser = JSON.stringify({
                    "Username": this.Username,
                    "Email": this.Email,
                    "tel": this.tel,
                });

                console.table(">>>>>>>",dataUser)

                let configUser = {
                    method: 'patch',
                    maxBodyLength: Infinity,
                    url: `https://twotsneaker.onrender.com/update/profile/${this.UserID}`,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: dataUser,
                };

                const userResponse = await axios.request(configUser);
                // console.log(JSON.stringify(userResponse.data));

                // อัปเดตข้อมูลที่อยู่
                let dataLoc = JSON.stringify({
                    "country": this.country,
                    "district": this.district,
                    "province": this.province,
                    "postcode": this.postcode,
                    "UserID": this.UserID,
                });

                let configLoc = {
                    method: 'patch',
                    maxBodyLength: Infinity,
                    url: 'https://twotsneaker.onrender.com/location',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: dataLoc,
                };

                const locationResponse = await axios.request(configLoc);

                // console.log(JSON.stringify(locationResponse.data));

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Update successful!',
                    showConfirmButton: false,
                    timer: 3000
                }).then(() => {
                    window.location.reload();
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
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
            this.country = this.Location.country;
            this.province = this.Location.province;
            this.district = this.Location.district;
            this.postcode = this.Location.postcode;
            
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
                    this.Username = element.Username;
                    this.Email = element.Email;
                    this.tel = element.tel;
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