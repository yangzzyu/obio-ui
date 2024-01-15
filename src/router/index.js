import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LabSciencesView from "@/views/LabSciencesView.vue";
import CdmoView from "@/views/CdmoView.vue";
import InnoView from "@/views/InnoView.vue";
import InsightsView from "@/views/InsightsView.vue";
import InvestorRelationsView from "@/views/InvestorRelationsView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/sys",
      name: "lab-sciences",
      component: LabSciencesView,
    },
    {
      path: "/cdmo",
      name: "cdmo",
      component: CdmoView,
    },
    {
      path: "/cx",
      name: "innovations",
      component: InnoView,
    },
    {
      path: "/news",
      name: "insights",
      component: InsightsView,
    },
    {
      path: "/investor-relations",
      name: "investor-relations",
      component: InvestorRelationsView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
