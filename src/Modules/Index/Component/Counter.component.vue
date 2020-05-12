<template>
    <div class="counter valign-wrapper">
        <div class="center">
            <h1>{{ $store.state.steps[$store.state.currentStep] }}</h1>
            <h6 v-if="$store.state.showRounds && !$store.state.useRandom">Round
                {{$store.state.count}}<span v-if="this.$store.state.maxCount > 0">/{{this.$store.state.maxCount}}</span>
            </h6>

            <button @click="start"
                    class="btn-floating btn-large waves-effect waves-light red"
                    v-if="!interval">
                <i class="material-icons">play_arrow</i>
            </button>
            <button @click="stop"
                    class="btn-floating btn-large waves-effect waves-light red"
                    v-if="interval">
                <i class="material-icons">stop</i>
            </button>
        </div>
    </div>
</template>

<style scoped>
    .counter {
        height: 60vh;
    }

    .center {
        width: 100%;
    }
</style>
<script>
    export default {
        data() {
            return {
                output: null,
                interval: null,
                showStep: false,
                steps: null,
            }
        },

        mounted() {
            this.$on('start', () => {
                this.start();
            })

            this.$on('stop', () => {
                this.stop();
            })
        },

        methods: {
            start() {
                if (this.interval) {
                    this.stop();
                }

                this.$store.state.currentStep = 0;
                this.$store.state.count = 1;

                this.interval = setInterval(() => {
                    this.showStep = false;
                    this.update();

                }, this.$store.state.speed * 1000);

                this.steps = this.$store.state.steps;
            },

            update() {

                if (this.$store.state.count > this.$store.state.maxCount && this.$store.state.maxCount > 0) {
                    this.stop();
                    return;
                }

                if (this.$store.state.useRandom) {
                    this.$store.state.currentStep = this.getRandomStep();
                    this.showStep = true;
                    return;
                }

                if (this.$store.state.currentStep + 1 <= this.$store.state.steps.length - 1) {
                    this.showStep = true;
                    this.$store.state.currentStep++;
                    return;
                }

                this.$store.state.count++;
                this.$store.state.currentStep = 0;
                this.showStep = true;
            },

            getRandomStep() {
                const newStep = Math.round(Math.random() * (this.$store.state.steps.length - 1));
                if (this.$store.state.currentStep === newStep) {
                    return this.getRandomStep();
                }
                return newStep;
            },

            stop() {
                clearInterval(this.interval);
                this.interval = null;
                this.$store.state.count = 0;
                this.$store.state.currentStep = 0;
            }
        }
    }
</script>
