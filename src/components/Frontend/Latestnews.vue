<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
</script>
<template>
    <div class="latestnews-section">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-12">
                    <h2>Latest News</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do</p>
                    <div class="mt-4">
                        <router-link class="read-more-project">Read More</router-link>
                    </div>
                </div>
                <div class="col-md-7 col-12">
                    <div class="project-cards">
                        <img src="../../assets/images/image-news.png" alt="">
                        <div class="project-content">
                            <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                            <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                on 27/05/2021, to consider and approve the</p>
                            <div>
                                <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="news-slider">
                <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                    clickable: true,
                }" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <div class="project-cards">
                            <img src="../../assets/images/image-news.png" alt="">
                            <div class="project-content">
                                <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                                <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                    on 27/05/2021, to consider and approve the</p>
                                <div>
                                    <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="project-cards">
                            <img src="../../assets/images/image-news.png" alt="">
                            <div class="project-content">
                                <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                                <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                    on 27/05/2021, to consider and approve the</p>
                                <div>
                                    <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="project-cards">
                            <img src="../../assets/images/image-news.png" alt="">
                            <div class="project-content">
                                <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                                <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                    on 27/05/2021, to consider and approve the</p>
                                <div>
                                    <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="project-cards">
                            <img src="../../assets/images/image-news.png" alt="">
                            <div class="project-content">
                                <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                                <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                    on 27/05/2021, to consider and approve the</p>
                                <div>
                                    <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="project-cards">
                            <img src="../../assets/images/image-news.png" alt="">
                            <div class="project-content">
                                <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                                <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                    on 27/05/2021, to consider and approve the</p>
                                <div>
                                    <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="project-cards">
                            <img src="../../assets/images/image-news.png" alt="">
                            <div class="project-content">
                                <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                                <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                    on 27/05/2021, to consider and approve the</p>
                                <div>
                                    <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="project-cards">
                            <img src="../../assets/images/image-news.png" alt="">
                            <div class="project-content">
                                <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                                <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                    on 27/05/2021, to consider and approve the</p>
                                <div>
                                    <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="project-cards">
                            <img src="../../assets/images/image-news.png" alt="">
                            <div class="project-content">
                                <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                                <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                    on 27/05/2021, to consider and approve the</p>
                                <div>
                                    <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="project-cards">
                            <img src="../../assets/images/image-news.png" alt="">
                            <div class="project-content">
                                <h4 class="mb-2">Suyog Telematics Ltd board</h4>
                                <p class="mb-2">A meeting of the Board of Directors of Suyog Telematics Ltd is scheduled
                                    on 27/05/2021, to consider and approve the</p>
                                <div>
                                    <a href="#">Read More <span><i class="bi bi-caret-right-fill"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>