import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        name: "home",
        path: "/",
        component: () => import("../src/components/Frontend/Home.vue")
    },
    {
        name: "about",
        path: "/about-us",
        component: () => import("../src/components/Frontend/About.vue")
    },
    {
        name: "vision",
        path: "/our-vision",
        component: () => import("../src/components/Frontend/Vision/Index.vue")
    },
    {
        name: "business",
        path: "/our-business",
        component: () => import("../src/components/Frontend/Business/Index.vue")
    },
    {
        name: "career",
        path: "/career",
        component: () => import("../src/components/Frontend/Career/Index.vue")
    },
    {
        name: "investor",
        path: "/investor",
        component: () => import("../src/components/Frontend/Investor/Index.vue")
    },
    {
        name: "financial.highlight",
        path: "/financial-highlight",
        component: () => import("../src/components/Frontend/Investor/Financial.vue")
    },
    {
        name: "board.director",
        path: "/board-director",
        component: () => import("../src/components/Frontend/Investor/BoardDirector.vue")
    },
    {
        name: "committee",
        path: "/committee",
        component: () => import("../src/components/Frontend/Investor/Committees.vue")
    },
    {
        name: "policies.moa",
        path: "/policies-moa&aoa",
        component: () => import("../src/components/Frontend/Investor/PoliciesMoa.vue")
    },
    {
        name: "stock.exchange",
        path: "/stock-exchange",
        component: () => import("../src/components/Frontend/Investor/StockExchange.vue")
    },
    {
        name: "unpaid.dividend",
        path: "/unpaid-dividend",
        component: () => import("../src/components/Frontend/Investor/UnpaidDividend.vue")
    },
    {
        name: "quarterly.result",
        path: "/quarterly-result",
        component: () => import("../src/components/Frontend/Investor/QuarterlyResult.vue")
    },
    {
        name: "annual.reports",
        path: "/annual-reports",
        component: () => import("../src/components/Frontend/Investor/AnnualReports.vue")
    },
    {
        name: "newspaper.advertise",
        path: "/newspaper-advertise",
        component: () => import("../src/components/Frontend/Investor/NewspaperAdd.vue")
    },
    {
        name: "shareholder.communication",
        path: "/shareholder-communication",
        component: () => import("../src/components/Frontend/Investor/ShareCommunicate.vue")
    },
    {
        name: "shareholding.pattern",
        path: "/shareholding-pattern",
        component: () => import("../src/components/Frontend/Investor/ShareholdingPatter.vue")
    },
];
const router =createRouter({
    history:createWebHistory(),
    routes
})
export default router;