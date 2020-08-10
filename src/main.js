import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import VueAxios from "vue-axios";

const base = axios.create({
    baseURL: "https://crudcrud.com/api/3058e6a8a96443e3991b50d1bca9028a",
});

Vue.prototype.$http = base;
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')