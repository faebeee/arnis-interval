<template>
    <div>
        <div class="row">
            <div class="col s12">
                <h1>Settings</h1>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <input type="checkbox"
                        id='random'
                        v-model="$store.state.useRandom"/>
                <label for="random">Random</label>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <p class="range-field">
                    <input type="range"
                            id="speed"
                            v-model="$store.state.speed"
                            step="0.5"
                            min="0"
                            max="10"/>
                    <label for="speed">Speed</label>
                </p>
            </div>
        </div>
        <div class="row">
            <div class="input-filed col s12">
                <input type="number"
                        id="maxRounds"
                        v-model="$store.state.maxCount"/>
                <label for="maxRounds">Max. Rounds</label>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <input type="text"
                        v-model='selectedSteps'
                        id='steps'/>
                <label for="steps">Comma seperated list</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                allSteps: ['Isa', 'Dalawa', 'Tatlo', 'Apat', 'Lima', 'Anim', 'Pito', 'Walo', 'Siyam', 'Sampu'],
                selectedSteps: ['Isa', 'Dalawa', 'Tatlo', 'Apat', 'Lima', 'Anim', 'Pito', 'Walo', 'Siyam', 'Sampu'],
            }
        },


        methods: {
            onChange(e) {
                console.log(e);
            },
        },

        watch: {
            selectedSteps(val) {
                this.$store.state.steps = val.split(',');
            },
        },

        mounted() {
            this.selectedSteps = this.allSteps.join(', ');
        },

    }
</script>
