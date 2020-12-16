<template>
    <user-data @add-user="addFriend"></user-data>

    <ul>
        <active-user v-for="user in activeUser" :key="user.id" :id="user.id" :name="user.name" :age="user.age" ></active-user>
    </ul>
</template>




<script>
    export default {
        data() {
            return {
                activeUser: [{
                    id: '1',
                    name: 'Luke Smith',
                    age: '41'
                }]

            }
        },
        methods: {
            addFriend(name, age) {
                const addedUser = {
                    id: new Date().toISOString(),
                    name: name,
                    age: age
                };
                this.activeUser.push(addedUser);
                console.log(addedUser);

            }
        }
    }

</script>
 