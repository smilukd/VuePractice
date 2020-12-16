<template>
    <ul>
        <li :class="{active: modelValue == 'poor'}"><button type="button" @click="activate('poor')">Poor</button></li>
        <li :class="{active: modelValue == 'average'}"><button type="button" @click="activate('average')">Average</button></li>
        <li :class="{active: modelValue == 'great'}"><button type="button" @click="activate('great')">Great</button></li>
    </ul>
</template>

<script>
    export default {
        props: ['modelValue'],
        emits: ['update:modelValue'],

        methods: {
            activate(option) {
                this.$emit('update:modelValue', option);
            },
        }
    }

</script>

<style scoped>
    .active {
        border-color: purple;

    }

    .active button {
        color: purple;
    }

    ul {
        list-style: none;
        margin: .5rem 0;
        padding: 0;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
    }

    li {
        margin: 1rem;
        border: 1px solid #ccc;
        padding: 1rem;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: center;
        -ms-align-items: center;
        align-items: center;
    }

    button {
        font: inherit;
        border: none;
        border-color: transparent;
        cursor: pointer;
    }

</style>
