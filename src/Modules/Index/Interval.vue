<template>
    <div>
        <h3 class="center">Interval</h3>
        <div id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
                <settings></settings>

            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
            </div>
        </div>

        <counter ref="counter"></counter>

        <div class="center-align">
            <a class="modal-trigger btn-floating btn-large waves-effect waves-light red" href="#modal1" @click="stop">
                <i class="material-icons">settings</i>
            </a>
        </div>

    </div>
</template>
<script>
    import Settings from './Component/Settings.component.vue';
    import Counter from './Component/Counter.component.vue';

    export default {
        components : {
            'settings' : Settings,
            'counter' : Counter
        },

        mounted(){
            $('.modal').modal();
        },

        methods : {
            stop(){
                this.$refs.counter.$emit('stop');
            }
        }

    }
</script>