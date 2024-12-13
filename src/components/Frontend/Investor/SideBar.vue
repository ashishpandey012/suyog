<script setup>
import { ref } from 'vue';

const show = ref(true);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);

</script>

<template>
    <div class="sidebar-section">
        <div class="sidebar-heading">
            <h3>Find More</h3>
        </div>
        <div class="sidebar-links">
            <div class="dropdown-main-section">
                <button @click="show = !show" class="dropdown-btn">Company Profile
                    <span>
                        <i  v-if="show" class="bi bi-chevron-down"></i>
                        <i v-else class="bi bi-chevron-right"></i>
                    </span>
                </button>
                <div v-if="show" class="dropdown-container" >
                    <router-link :to="{name: 'investor'}">Fact Sheet</router-link>
                    <router-link :to="{name: 'financial.highlight'}">Financial Highlights</router-link>
                </div>
            </div>
            <div class="dropdown-main-section">
                <button @click="show2 = !show2" class="dropdown-btn">Corporate Governance
                    <span>
                        <i  v-if="show2" class="bi bi-chevron-down"></i>
                        <i v-else class="bi bi-chevron-right"></i>
                    </span>
                </button>
                <div v-if="show2" class="dropdown-container" >
                    <router-link :to="{name: 'board.director'}">Board Of Directors</router-link>
                    <router-link :to="{name: 'committee'}">Committees</router-link>
                    <router-link :to="{name: 'policies.moa'}">Policies and MOA & AOA</router-link>
                </div>
            </div>
            <div class="dropdown-main-section">
                <button @click="show3 = !show3" class="dropdown-btn">Results
                    <span>
                        <i  v-if="show3" class="bi bi-chevron-down"></i>
                        <i v-else class="bi bi-chevron-right"></i>
                    </span>
                </button>
                <div v-if="show3" class="dropdown-container" >
                    <router-link :to="{name: 'quarterly.result'}">Quarterly Results</router-link>
                    <router-link :to="{name: 'annual.reports'}">Annual Reports</router-link>
                    <router-link :to="{name: 'newspaper.advertise'}">Newspaper Advertisement</router-link>
                </div>
            </div>
            <div class="dropdown-main-section">
                <button @click="show4 = !show4" class="dropdown-btn">Shareholder Communication
                    <span>
                        <i v-if="show4" class="bi bi-chevron-down"></i>
                        <i v-else class="bi bi-chevron-right"></i>
                    </span>
                </button>
                <div v-if="show4" class="dropdown-container" >
                    <router-link :to="{name: 'shareholder.communication'}">Shareholders' Communication</router-link>
                    <router-link :to="{name: 'unpaid.dividend'}">7 Years Unpaid Dividend</router-link>
                    <router-link :to="{name: 'shareholding.pattern'}">Shareholding Pattern</router-link>
                </div>
            </div>
            <div class="dropdown-main-section">
                <router-link :to="{name: 'stock.exchange'}" class="dropdown-btn">Stock Exchange Submission
                    
                </router-link>
            </div>
            <div class="dropdown-main-section">
                <router-link class="dropdown-btn">Investor Support
                  
                </router-link>
            </div>
            <div class="dropdown-main-section">
                <router-link class="dropdown-btn">Disclosure under Reg 46 of SEBI (LODR) Reg, 2015
                    
                </router-link>
            </div>
        </div>
    </div>
</template>
