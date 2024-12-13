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
                <div class="main-left-section-heading">
                    <h3 class="mb-3">Fact Sheet</h3>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>@Suyog Telematics Limited</td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td>Suyog Telematics Limited ( STL), the Company is one of the fastest-growing passive telecom infrastructure providers in India. It is engaged primarly in the business of installing, commissioning and servicing of poles, towers and optical fibre cabe (OFC ) systems, catering to the telecommunication industry with operators across 12 telecom circles of the country, we partner with leading telecom providers to host their active telecommunication infrastructure in different geographies.</td>
                                </tr>
                                <tr>
                                    <td>Incorporation</td>
                                    <td>July 28, 1995</td>
                                </tr>
                                <tr>
                                    <td>Incorporation</td>
                                    <td>July 28, 1995</td>
                                </tr>
                                <tr>
                                    <td>Incorporation</td>
                                    <td>July 28, 1995</td>
                                </tr>
                                <tr>
                                    <td>Incorporation</td>
                                    <td>July 28, 1995</td>
                                </tr>
                                <tr>
                                    <td>Incorporation</td>
                                    <td>July 28, 1995</td>
                                </tr>
                                <tr>
                                    <td>Incorporation</td>
                                    <td>July 28, 1995</td>
                                </tr>
                                <tr>
                                    <td>Incorporation</td>
                                    <td>July 28, 1995</td>
                                </tr>
                                <tr>
                                    <td>Incorporation</td>
                                    <td>July 28, 1995</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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