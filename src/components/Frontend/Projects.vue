<script setup>
</script>
<template>
    <div class="project-section">
        <div class="container">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                        type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        <div class="nav-tab-img"><img src="../../assets/images/goverment.png" alt=""></div>
                        <span>Government <span class="d-block">Projects</span></span>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                        type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                        <div class="nav-tab-img"><img src="../../assets/images/setting.png" alt=""></div>
                        <span>Private <span class="d-block">Projects</span></span>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                        type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                        <div class="nav-tab-img"><img src="../../assets/images/technology.png" alt=""></div>
                        <span>Small Cell <span class="d-block">Projects</span></span>
                    </button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                    tabindex="0">
                    <div class="row align-items-center">
                        <div class="col-md-6 col-12" data-aos="fade-right" data-aos-duration="2000">
                            <div class="project-content">
                                <h2>Government Project</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of
                                    a
                                    page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters</p>
                                <div class="mt-4">
                                    <router-link class="read-more-project">Read More</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12" data-aos="fade-left" data-aos-duration="2000">
                            <div class="project-image">
                                <img src="../../assets/images/project-image1.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                    tabindex="0">
                    <div class="row align-items-center">
                        <div class="col-md-6 col-12" data-aos="fade-right" data-aos-duration="2000">
                            <div class="project-content">
                                <h2>Private Project</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of
                                    a
                                    page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters</p>
                                <div class="mt-4">
                                    <router-link class="read-more-project">Read More</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12" data-aos="fade-left" data-aos-duration="2000">
                            <div class="project-image">
                                <img src="../../assets/images/project-image1.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                    tabindex="0">
                    <div class="row align-items-center">
                        <div class="col-md-6 col-12" data-aos="fade-right" data-aos-duration="2000">
                            <div class="project-content">
                                <h2> Project</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                <div class="mt-4">
                                    <router-link class="read-more-project">Read More</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12" data-aos="fade-left" data-aos-duration="2000">
                            <div class="project-image">
                                <img src="../../assets/images/project-image1.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
