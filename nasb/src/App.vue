<template>
    <div id="app">
        <validity-check ></validity-check>
    </div>
</template>

<script>
    import ValidityCheck from './components/ValidityCheck.vue'

    export default {
        name: 'App',
        components: {
            ValidityCheck,
        },
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
