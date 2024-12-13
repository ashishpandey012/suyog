<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
    <div class="sub-banner">
        <h2>
            {{
                route.name === 'about' ? 'About Us' :
                route.name === 'investor' ? 'Investor Relations' :
                route.name === 'vision' ? 'Our Vision' :
                route.name === 'business' ? 'Our Business' :
                route.name === 'career' ? 'Careers' :
                'Welcome'
            }}
        </h2>
    </div>
</template>