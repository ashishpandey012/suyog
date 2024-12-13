<script setup>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import Banner from '../Frontend/Banner.vue'
import Leadership from '../Frontend/Leadership.vue'
import Latestnews from '../Frontend/Latestnews.vue'
import Awards from '../Frontend/Awards.vue'
import QuickFacts from './QuickFacts.vue';
import Projects from './Projects.vue'
import OurClient from './OurClient.vue';
import InvestorRelation from './InvestorRelation.vue';
import OurServices from './OurServices.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

</script>
<template>
    <Header />
    <Banner />
    <OurServices />
    <QuickFacts />
    <InvestorRelation />
    <Projects />
    <Leadership />
    <Awards />
    <Latestnews />
    <OurClient />
    <Footer />
</template>