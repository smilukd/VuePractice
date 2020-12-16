<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <!--        This is where the NewFriend template is injected-->
        <new-friend @add-contact="addContact"></new-friend>
        <ul>
            <li>
                <friend-contact v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name" :phone-number="friend.phone" :email-address="friend.email" :is-favorite="friend.isFavorite" @toggle-favorite="toggleFavoriteStatus" @delete="deleteContact"></friend-contact>
                <!--                @toggle-favorite listens for the custom emitted 'toggle-favorite' to happen, when it does it calls the toggleFavoriteStatus method-->
            </li>
        </ul>
    </section>
</template>


<script>
    export default {
        data() {
            return {
                friends: [{
                        id: 'manuel',
                        name: 'Luke Smith',
                        phone: '123-456-7890',
                        email: 'email@co.com',
                        isFavorite: true
                    },
                    {
                        id: 'tim',
                        name: 'Tim Smith',
                        phone: '234-567-8910',
                        email: 'tim@co.com',
                        isFavorite: true
                    },
                    {
                        id: 'bob',
                        name: 'Bob Smith',
                        phone: '135-791-1113',
                        email: 'bob@co.com',
                        isFavorite: false
                    }
                ]
            }
        },
        methods: {
            toggleFavoriteStatus(friendId) {
                //method that is called when custom emitter 'toggle-favorite' is heard.

                //find the friend object that has that ID
                const identifiedFriend = this.friends.find((friend) => friend.id === friendId);

                //toggle the state of the isFavorite boolean.
                identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
            },
            addContact(name, phone, email){
                const newFriendContact = {
                    id: new Date().toISOString(),
                    name: name,
                    phone: phone,
                    email: email,
                    isFavorite: false
                };
                this.friends.push(newFriendContact);
            },
            deleteContact(friendId){
                this.friends = this.friends.filter((friend) => friend.id !== friendId); // filter looks to keep all items in an array when the function, passed as an argument to filter(), returns true. So we are searching for all friend.id's that are NOT equal to the friendID, so that we keep them. All false returns get removed.
            }
        }
    }

</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Jost', sans-serif;
    }

    body {
        margin: 0;
    }

    header {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 3rem auto;
        border-radius: 10px;
        padding: 1rem;
        background-color: #58004d;
        color: white;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }

    #app ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    #app li,
    #app form {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 1rem auto;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }

    #app h2 {
        font-size: 2rem;
        border-bottom: 4px solid #ccc;
        color: #58004d;
        margin: 0 0 1rem 0;
    }

    #app button {
        font: inherit;
        cursor: pointer;
        border: 1px solid #ff0077;
        background-color: #ff0077;
        color: white;
        padding: 0.05rem 1rem;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }

    #app button:hover,
    #app button:active {
        background-color: #ec3169;
        border-color: #ec3169;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }

    #app input {
        font: inherit;
        padding: 0.15rem;
    }

    #app label {
        font-weight: bold;
        margin-right: 1rem;
        width: 7rem;
        display: inline-block;
    }

    #app form div {
        margin: 1rem 0;
    }

</style>
