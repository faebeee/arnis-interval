'use strict';

import Index from './Index.vue';
import Interval from './Interval.vue';

module.exports = {
    path: '/',
    name : 'index',
    component: Index,
    children : [
        { path: '/', name: 'home', component: Interval },
    ]
};