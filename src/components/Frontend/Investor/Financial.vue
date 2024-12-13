<script setup>
import Header from '../../Header.vue';
import Footer from '../../Footer.vue';
import SubHeading from '../SubHeading.vue';
import SideBar from './SideBar.vue';
import OurClient from '../OurClient.vue';
import PresentationAnalyst from './PresentationAnalyst.vue';
</script>
<template>
    <Header />
    <SubHeading />
    <div class="container">
        <div class="row investor-section-area">
            <div class="col-lg-8 col-12 mobile-order">
                <div class="main-left-section">
                    <h2 class="mb-3">Financial Highlight</h2>
                </div>
            </div>
            <div class="col-lg-4 col-12">
                <div class="investor-sidebar">
                    <SideBar />
                </div>
            </div>
        </div>
    </div>
    <PresentationAnalyst />
    <OurClient />
    <Footer />
</template>