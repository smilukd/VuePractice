const app = Vue.createApp({
    data() {
        return {

            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '123-456-7890',
                    email: 'you@some.com'
            },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '234-567-8910',
                    email: 'else@some.com'
                }
                     ],

        }
    }
});


app.component('friend-contact',{
    template: `
<li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ detailsAreVisible  ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
`,
    data() {

        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '123-456-7890',
                email: 'you@some.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});


app.mount('#app');
