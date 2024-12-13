<script setup>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper modules
const modules = [Navigation, Pagination];
</script>

<template>
  <div class="common-section award-section">
    <div class="container">
      <h2 class="text-center mb-4">Awards</h2>
      <swiper :slidesPerView="3" :spaceBetween="30" :navigation="true" :pagination="{ clickable: true }"  :modules="modules" :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 10 }, 
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
        }" class="mySwiper">
        <swiper-slide>
          <div class="main-award">
            <div class="award-img" data-aos="fade-up" data-aos-easing="ease-in-sine">
              <img src="../../assets/images/award1.png" alt="">
            </div>
            <div class="award-text">
              <h3>2022</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-award">
            <div class="award-img" data-aos="fade-up" data-aos-easing="ease-in-sine">
              <img src="../../assets/images/award2.png" alt="">
            </div>
            <div class="award-text">
              <h3>2022</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-award">
            <div class="award-img" data-aos="fade-up" data-aos-easing="ease-in-sine">
              <img src="../../assets/images/award3.png" alt="">
            </div>
            <div class="award-text">
              <h3>2022</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-award">
            <div class="award-img" data-aos="fade-up" data-aos-easing="ease-in-sine">
              <img src="../../assets/images/award4.png" alt="">
            </div>
            <div class="award-text">
              <h3>2022</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-award">
            <div class="award-img" data-aos="fade-up" data-aos-easing="ease-in-sine">
              <img src="../../assets/images/award5.png" alt="">
            </div>
            <div class="award-text">
              <h3>2022</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-award">
            <div class="award-img" data-aos="fade-up" data-aos-easing="ease-in-sine">
              <img src="../../assets/images/award6.png" alt="">
            </div>
            <div class="award-text">
              <h3>2022</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
