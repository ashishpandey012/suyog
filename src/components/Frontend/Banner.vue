<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
</script>

<template>
  <div class="background-banner">
    <div class="container">
      <div class="banner-content row" data-aos="fade-right" data-aos-duration="2000">
        <div class="col-lg-7 col-md-9 col-12">
          <h1 class="dark-blue">Gearing up the
            <strong class="d-block">Next Genration</strong></h1>
          <div class="mt-4 d-flex gap-4 align-items-center">
            <router-link :to="{}" class="banner-contact">Read More <span> <i class="bi bi-chevron-right"></i></span></router-link>
          </div>
        </div>
      </div>
    </div>
    <a href="#next-section" class="animated-arrow">
      <div class="arrows-inner">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="text">Scroll down</span>
      </div>
    </a>
  </div>
  <div class="suyog-total-year position-relative">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-7">
            <div class="d-flex align-items-center gap-4">
              <img src="../../assets/images/25years.png" alt="">
              <div>
                <h3 class="text-white">25 Years</h3>
                <h4 class="text-white">Of Suyog Telematics</h4>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="video-section">
              <iframe  height="315" src="https://www.youtube.com/embed/u5i9z7frwos?si=YO5mrVmETs2F5j-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>