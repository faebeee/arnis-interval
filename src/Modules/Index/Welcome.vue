<template>
    <div>
        <h1> {{ $t("message.welcome") }} </h1>

        <router-link :to="{name : 'home'}">
            Home
        </router-link>
    </div>
</template>

<script>
    export default {

    }
</script>