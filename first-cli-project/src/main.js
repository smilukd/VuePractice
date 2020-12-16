import { createApp } from 'vue';

import App from './App.vue'
import FriendContact from './components/FriendContact.vue';
// Bring in the NewFriend vue
import NewFriend from './components/NewFriend.vue';

const app = createApp(App);
app.component('friend-contact', FriendContact);

// tie the new-friend element to the NewFriend.vue
app.component('new-friend', NewFriend)

app.mount('#app');