/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
import {
  faPhone,
  faMapMarkerAlt,
  faSearch,
  faSuitcase,
  faMoneyBill,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhone,
  faMapMarkerAlt,
  faSearch,
  faSuitcase,
  faMoneyBill,
  faClock,
  faInstagram,
  faTwitter,
  faFacebookF
);

createApp(App).component("icon", FontAwesomeIcon).mount("#app");
