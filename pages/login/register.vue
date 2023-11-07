<template>
    <div>
        <section class="vh-100" style="background-color: #eee;">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style="border-radius: 25px;">
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 font1">Sign up</p>

                            <form class="mx-1 mx-md-4">

                                <!-- <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3 d-flex flex-column">
                                            <img :src="`${previewImage}`" alt="" style="width: 100px; height: 100px;" class="rounded-circle mx-auto">
                                            <div class="form-text" style="margin: 5px 0px 5px 5px; font-size: medium;">Your photo</div>
                                            <div class="input-group">
                                                <input class="form-control rounded-4" type="file" ref="fileInput" @input="pickFile"  >
                                            </div>
                                        </div>
                                    </div>
                                </div> -->

                            <div class="d-flex flex-row align-items-center mb-4">
                                <div class="form-outline flex-fill mb-0">
                                    <input required type="text" id="form3Example1c" class="form-control" v-model="name" />
                                    <label class="form-label" style="color: #94979c;" for="form3Example1c">Your Name</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <div class="form-outline flex-fill mb-0">
                                    <input required type="email" id="form3Example3c" class="form-control" v-model="email" />
                                    <label class="form-label" style="color: #94979c;" for="form3Example3c">Your Email</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <div class="form-outline flex-fill mb-0">
                                    <input required type="text" id="form3Example5c" class="form-control" v-model="tel" />
                                    <label class="form-label" style="color: #94979c;" for="form3Example3c">Your phone number</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <div class="form-outline flex-fill mb-0">
                                    <input required type="password" id="form3Example6c" class="form-control" v-model="password" />
                                    <label class="form-label" style="color: #94979c;" for="form3Example4c">Password</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <div class="form-outline flex-fill mb-0">
                                    <input required type="password" id="form3Example4cd" class="form-control" v-model="Conpassword" />
                                    <label class="form-label" style="color: #94979c;" for="form3Example4cd">Repeat your password</label>
                                </div>
                            </div>

                            <div class="form-check d-flex justify-content-center mb-5">
                                <label class="form-check-label" for="form2Example3">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                    I agree all statements in <a href="#!">Terms of service</a>
                                </label>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="button" class="btn btn-primary btn-lg" @click="register()">Register</button>
                            </div>

                            </form>

                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center justify-content-center order-1 order-lg-2">

                            <img src="~/static/logo.png" class="img-fluid" alt="Sample image">

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
// CommonJS
const Swal = require('sweetalert2')
export default{
    data() {
        return {
            name: "",
            email: "",
            password: "",
            Conpassword: "",
            // previewImage: "",
            tel: "",
        }
    },
    methods: {
        register() {
            if (this.password === this.Conpassword) { // เปลี่ยน "==" เป็น "==="
                const axios = require('axios');
                let data = JSON.stringify({
                    "Username": this.name,
                    "Password": this.password,
                    "Email": this.email,
                    "tel": this.tel,
                    // "img": this.previewImage
                });

                let config = {
                    method: 'post',
                    url: 'https://twotsneaker.onrender.com/register',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                .then((response) => {
                    console.log("register >>>>", JSON.stringify(response.data));
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Sign up successfully!',
                        showConfirmButton: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location = '/login';
                        }
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'มีบางอย่างผิดปกติ',
                        text: "ระบบขัดข้อง",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                    });
                    console.log(error);
                });
            } else {
                // เพิ่มโค้ดสำหรับกรณีที่รหัสผ่านไม่ตรงกัน
                Swal.fire({
                    title: 'รหัสผ่านไม่ตรงกัน',
                    text: 'กรุณาตรวจสอบรหัสผ่านอีกครั้ง',
                    icon: 'error',
                });
            }
        },
        pickFile () {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
              let reader = new FileReader
              reader.onload = e => {
              this.previewImage = e.target.result
              console.log(this.previewImage)
            }
            reader.readAsDataURL(file[0])
            this.$emit('input', file[0])
            }
        },
    }
}
</script>