import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'
import VueToast from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-sugar.css';


Vue.use(VueToast, {
  position: "top",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: true,
  maxToasts: 1,
  newestOnTop: true,
  color: 'black',
});

Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
