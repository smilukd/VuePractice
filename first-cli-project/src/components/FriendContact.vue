<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '( FAVORITE )' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
        <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>


<script>
    export default {
        // one way to define an array of props
        //        props: [
        //            'name',
        //            'phoneNumber',
        //            'emailAddress',
        //            'isFavorite'
        //        ],
        props: {
            // another way to define an array of props, as objects, with details about its data type, required, and even validation
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true,

            },
            phoneNumber: {
                type: String,
                required: true
            },
            emailAddress: {
                type: String,
                required: true
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false,
            }
        },

        //user emits to help define and make clear what is being emitted by this vue

        //this is the most basic, it only lists that there is a toggle-favorite being emitted that we can listen for
        //        emits: [
        //            'toggle-favorite'
        //        ],

        // this version is a bit more verbose, it tells us the name to listen for, and also what is being done with that emitter
//        emits: {
//            'toggle-favorite': functon(id) {
//                if (id) {
//                    return true;
//                } else {
//                    return false;
//                }
//
//            }
//        }
        emits: ['toggle-favorite', 'delete'],
        data() {
            return {
                detailsAreVisible: false
            };
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite() {
                // emit custom event when the favorite toggle button is clicked.
                this.$emit('toggle-favorite', this.id);
            }
        }
    }

</script>
