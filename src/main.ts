import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

const app = new Vue({
   router,
   store,
   render: (h) => h(App),
});

app.$mount('#app');
