'use strict';

import Index from './Index.vue';
import Home from './Home.vue';
import Welcome from './Welcome.vue';

module.exports = {
    path: '/',
    name : 'index',
    component: Index,
    children : [
        { path: '/', name: 'home', component: Home },
        { path: '/welcome', name: 'welcome', component: Welcome },
    ]
};