'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import i18n from 'vue-i18n';
import vuex from 'vuex';
import VueTranslate from 'vue-translate-plugin';


import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueTranslate);
Vue.use(i18n);
Vue.use(vuex);

Vue.locale('en', require('./Translations/en.json'));

Vue.config.lang = 'en';

let router = new VueRouter({
  routes: require('./Config/Routes'),
});


new Vue({ 
    el: '#app',
    store : require('./Store/Store'),
    router : router,
    render: function (createElement) {
       return createElement(App)
    }
});
