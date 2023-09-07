/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./vuex";

//import pinia
import { createPinia } from 'pinia'

//route imports
import home from "./views/home.vue";
import contact from "./views/contact.vue";
import about from "./views/about.vue";
import admin from "./views/admin.vue";
import adsPage from "./views/adsPage.vue";
import prices from "./views/prices.vue";
import singleAd from "./views/singleAd.vue";
import "./axios";

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
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
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
  faEye,
  faEyeSlash,
  faUser,
  faCircleXmark,
  faFilter,
  faArrowsRotate,
  faBars,
  faXmark,
  faBuilding,
  faBullseye,
  faChevronRight,
  faChevronLeft,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

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
  faTrash,
  faEye,
  faEyeSlash,
  faUser,
  faCircleXmark,
  faFilter,
  faWhatsapp,
  faArrowsRotate,
  faLinkedin,
  faBars,
  faXmark,
  faBuilding,
  faSuitcase,
  faBullseye,
  faChevronRight,
  faChevronLeft,
  faAnglesRight,
  faAnglesLeft,

);

const app = createApp(App);

app.use(createPinia())
app.use(store);
app.use(router);
app.component("icon", FontAwesomeIcon);

app.mount("#app");
