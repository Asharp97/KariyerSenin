/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

//route imports
import home from "./views/home.vue";
import contact from "./views/contact.vue";
import about from "./views/about.vue";
import admin from "./views/admin.vue";
import adsPage from "./views/adsPage.vue";
import prices from "./views/prices.vue";
import singleAd from "./views/singleAd.vue";

//router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: home },
    { path: "/ads", component: adsPage },
    { path: "/prices", component: prices },
    { path: "/about", component: about },
    { path: "/contact", component: contact },
    { path: "/admin", component: admin },
    { path: "/ad/:id", component: singleAd },
  ],
  linkActiveClass: "activate",
});

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
import {
  faPhone,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faSearch,
  faSuitcase,
  faMoneyBill,
  faClock,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhone,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faSearch,
  faSuitcase,
  faMoneyBill,
  faClock,
  faInstagram,
  faTwitter,
  faFacebookF,
  faPen,
  faTrash
);

createApp(App).use(router).component("icon", FontAwesomeIcon).mount("#app");
