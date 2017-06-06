"use strict";

import Vuex from 'vuex';

module.exports = new Vuex.Store({
    state: {
        useRandom : false,
        showRounds : true,

        speed : 1.5,
        count: 0,
        maxCount : 0,
        currentStep : 0,
        steps : ["Isa", "Dalawa", "Tatlo", "Apat", "Lima", "Anim",'Pito', 'Walo', 'Shiam', 'Sampo']
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});