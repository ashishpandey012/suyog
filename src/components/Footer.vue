<script setup>

</script>
<template>
    <div class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="footer-logo">
                        <router-link class="navbar-brand" :to="{ name: 'home' }"><img
                                src="../assets/images/suyog-logo.png" alt=""></router-link>
                    </div>
                    <p class="mt-3 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="col-md-3">
                    <h4 class="blue-color fw-semibold">Quick Links</h4>
                    <ul
                        class="d-flex footer-list mt-3 flex-column px-0">
                        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                        <li><router-link :to="{ name: 'about' }">About</router-link></li>
                        <li><a href="">Our Vision</a></li>
                        <li><a href="">Business</a></li>
                        <li><a href="">Investor</a></li>
                        <li><a href="">Career</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                                           
                </div>
            </div>
            <div class="d-flex lower-footer align-items-center justify-content-between pt-4">
                <p class="mobile-order">Copyright © 2024 <router-link
                        :to="{ name: 'home' }">suyogtelematics</router-link>
                    | All Right Reserved </p>
                <p class="">Designed & Developed by <router-link>Akairis Development</router-link> </p>
                <div class="d-flex align-items-center gap-2 privacy-condition">
                    <a href="">Privacy Policy</a>
                    |
                    <a href="">Term & Conditions</a>
                </div>
            </div>
        </div>
    </div>
</template>