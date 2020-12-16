<template>
    <form @submit.prevent="addUser">
        <input type="text" placeholder="Name" v-model="enteredName" required>
        <input type="text" placeholder="Age" v-model="enteredAge" required>
        <button>Add User</button>
    </form>
</template>




<script>
    export default {
        emits: ['add-user'],
        data() {
            return {
                enteredName: '',
                enteredAge: ''
            }
        },
        methods: {
            addUser() {
                this.$emit('add-user', this.enteredName, this.enteredAge);
                console.log("emitted");
            }
        }
    }

</script>


<style>
    #app input {
        display: block;
        margin: 10px 0;
    }

</style>
