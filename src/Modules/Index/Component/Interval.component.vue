<template>
    <div class="row card">
        <div class="col s12">
            <div class="row">
                <div class="col s12">



                    <transition name="fade">
                    <div class="col s12" v-if="interval">
                        <h2 v-if="showStep">{{ steps[currentStep] }}</h2>
                    </div>
                    </transition>
                    <transition name="fade">
                        <div class="col s12" v-show="!interval">
                            <div class="row">
                                <div class="col s12">
                                    <h3>Settings</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12">
                                    <p class="range-field">
                                        <input type="range" min="0" step="0.5" max="3" v-model="timeout" />
                                        <label class="active">Timeout</label>
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col s6">
                                    Random
                                </div>
                                <div class="col s6">
                                    <div class="switch">
                                        <label>
                                            Off
                                            <input type="checkbox" v-model="isRandom">
                                            <span class="lever"></span>
                                            On
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                    <div class="input-field col s12">
                                        <select multiple>
                                            <option v-for="step in steps" value="step" selected>{{step}}</option>
                                        </select>
                                        <label>Steps</label>
                                    </div>
                            </div>
                        </div>
                    </transition>

                    <button
                            v-if="!interval"
                            @click="start"
                            class="btn">
                        Start
                    </button>
                    <button
                            v-if="interval"
                            @click="stop"
                            class="btn">
                        Stop
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import TextToSpeech2 from 'text-to-speech-js';
    export default {
        data(){
            return {
                interval : null,
                steps : ["Isa", "Dalawa", "Tatlo", "Apat", "Lima", "Anim",'Pito', 'Walo', 'Shiam', 'Sampo'],
                currentStep : 0,
                timeout : 2,
                isRandom : true,
                showStep : false,
            }
        },

        mounted(){
            $(document).ready(function() {
                $('select').material_select();
            });
        },

        methods : {
            start() {

                if(this.interval){
                    this.stop();
                }
                this.update();
                this.interval = setInterval(() => {
                    this.showStep = false;
                    this.update();

                }, this.timeout*1000)
            },

            update(){
                if(this.isRandom) {
                    this.currentStep = Math.round(Math.random() * (this.steps.length - 1));
                    this.showStep = true;
                    return;
                }

                if(this.currentStep + 1 <= this.steps.length -1){
                    this.showStep = true;
                    this.currentStep++;
                    return;
                }
                this.currentStep = 0;
                this.showStep = true;


            },

            stop () {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }
</script>