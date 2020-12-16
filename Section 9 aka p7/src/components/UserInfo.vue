<template>
    <section>
        <base-card>
            <template #header> <!-- #header is the same as v-slot:header -->
                <h3>{{ fullName }}</h3>
                <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
                
            </template>
            <template v-slot:default>
                <p>{{ infoText }}</p>
            </template>
        </base-card>
    </section>
</template>

<script>
    export default {
        props: ['fullName', 'infoText', 'role'],
    };

</script>





<section>
    <div>
        <h2></h2>
        <h3></h3>
    </div>
</section>
