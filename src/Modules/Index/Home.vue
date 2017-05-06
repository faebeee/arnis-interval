<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h1>{{ $t('message.title')}}</h1>
                <interval></interval>
            </div>
        </div>
    </div>
</template>

<script>

    import IntervalComponent from './Component/Interval.component.vue';
    export default {
        components : {
            'interval' : IntervalComponent
        }
    }
</script>