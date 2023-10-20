<template>
    <div>
        <section class="vh-100" style="background-color: #eee;">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black" style="border-radius: 25px;">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center justify-content-center order-1">

                                        <img src="~/static/logo.png" class="img-fluid" alt="Sample image">

                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 font1">Login</p>

                                        <form class="mx-1 mx-md-4">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input required type="email" id="form3Example3c" class="form-control"
                                                        v-model="email" />
                                                    <label class="form-label" style="color: #94979c;"
                                                        for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input required type="password" id="form3Example4c" class="form-control"
                                                        v-model="password" />
                                                    <label class="form-label" style="color: #94979c;"
                                                        for="form3Example4c">Password</label>
                                                </div>
                                            </div>
                                            
                                            <p class="px-3">Don't have account? <a href="/login/register">create account</a></p>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" class="btn btn-primary btn-lg" @click="login()">login</button>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
const Swal = require('sweetalert2')
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            Conpassword: "",
            tel: "",
        }
    },
    methods: {
        login() {
            const axios = require('axios');
            let data = JSON.stringify({
                "Email": this.email,
                "Password": this.password
            });

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://twotsneaker.onrender.com/login',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'เข้าสู่ระบบสำเร็จ',
                    showConfirmButton: true,
                }).then((result) => {
                    localStorage.setItem("UserID", response.data);
                    localStorage.setItem("email", this.email);
                    if (result.isConfirmed) {
                        Swal.fire('Saved!', '', 'success')
                        window.location = '/';
                    }
                })
            })
            .catch((error) => {
            Swal.fire({
                title: 'มีบางอย่างผิดปกติ',
                text: "กรุณาใช้อีเมล์อื่น",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            })
            console.log(error);
            });




        }
    }
}
</script>