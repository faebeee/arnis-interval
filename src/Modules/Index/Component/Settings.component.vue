<template>
    <div >
        <div class="row">
            <div class="col s12">
                <h1>Settings</h1>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <input type="checkbox" id='random' v-model="$store.state.useRandom" />
                <label for="random">Random</label>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <p class="range-field">
                    <input type="range" id="speed" v-model="$store.state.speed" step="0.5" min="0" max="10" />
                    <label for="speed">Speed</label>
                </p>
            </div>
        </div>
        <div class="row">
            <div class="input-filed col s12">
                <input type="number" id="maxRounds" v-model="$store.state.maxCount" />
                <label for="maxRounds">Max. Rounds</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select ref="steps" multiple>
                    <option v-for="step in allSteps" :value="step" selected>{{step}}</option>
                </select>
                <label>Steps</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return {
                allSteps : ["Isa", "Dalawa", "Tatlo", "Apat", "Lima", "Anim",'Pito', 'Walo', 'Shiam', 'Sampo'],
            }
        },

        mounted(){
            $(this.$refs.steps).material_select();
        },

    }
</script>