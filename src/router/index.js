import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostsFeedView from "../views/PostsFeedView.vue";
import PostDetailsView from "../views/PostDetailsView.vue";

import AboutView from "../views/AboutView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dernieres-publications",
      name: "posts-feed",
      component: PostsFeedView,
    },
    {
      path: "/article-details/:postId",
      name: "post-details",
      component: PostDetailsView,
    },
    {
      path: "/a-propos",
      name: "about",
      component: AboutView,
    },
    
  ],
});

export default router;
