<script setup>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import SubHeading from './SubHeading.vue';
</script>
<template>
    <Header />
    <SubHeading />
    <div class="aboutus-section">
        <div class="container">
            <div class="row align-items-center  ">
                <div class="col-md-6 col-12">
                    <h3 class="blue-heading mb-3">Suyog Telemetics</h3>
                    <p class="mb-2">Our Company was originally incorporated as Suyog
                        Telematics Private Limited on July 28, 1995, under the
                        Companies Act, bearing Registration No. 091107 having
                        its Registered Office in Mumbai, Maharashtra.</p>
                        <p>Subsequently, pursuant to Shareholder’s Resolution
                        dated 2nd March, 2013, it was converted into Public
                        Limited Company and the name was changed to “Suyog
                        Telematics Limited“.</p>
                    <div class="desktop-btn mt-4">
                        <a class="contact-btn d-inline-block">Contact us</a>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="about-img">
                        <img src="../../assets/images/su.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>