<script setup>
import StockPrice from './Frontend/StockPrice.vue';
</script>

<template>
    <div class="header-section-main">
        <div class="top-header">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <StockPrice />
                    <div class="d-flex gap-3 align-items-center social-links">
                        <router-link><i class="bi bi-facebook dark-blue"></i></router-link>
                        <router-link><i class="bi bi-instagram"></i></router-link>
                        <router-link><i class="bi bi-twitter-x"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar-section">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <router-link class="navbar-brand" :to="{name: 'home'}"><img src="../assets/images/suyog-logo.png" alt=""></router-link>
                    <div class="header-btn mobile-btn">
                        <a class="contact-btn">Contact us</a>
                    </div>
                        
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span><i class="bi bi-list burger-menu"></i></span>
                    </button>
                    <div>
                        <div class="d-flex align-items-center">
                            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul class="navbar-nav mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">Home</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" :to="{name: 'about'}">About us</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" :to="{name: 'vision'}">Our Vision</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" :to="{name: 'business'}">Business</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" :to="{name: 'investor'}">Investor</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" :to="{name: 'career'}">Career</router-link>
                                    </li>
                                    <!-- <li class="nav-item">
                                        <a class="nav-link" href="#">Contact us</a>
                                    </li> -->
                                </ul>
                            </div>
                            <div class="header-btn desktop-btn">
                                <a class="contact-btn"><i class="bi bi-headset pe-1"></i> Contact us</a>
                            </div>
                        </div>
                    </div>          
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped></style>
