<template>
    <div>
        <header v-if="$slots.header">
            <slot name="header">
                <h2>The Default</h2> <!-- this is the default text when no data is passed in -->
            </slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }

</script>

<style scoped>
    header{
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: space-between;
        -ms-align-items: center;
        align-items: center;
    }
    div {
        margin: 2rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
    }
    
</style>
