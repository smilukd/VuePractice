<template>
    <div>
        <form @submit.prevent="submitToken" v-if="!tokenIsValid">
            <input type="text" placeholder="Enter API token" name="token" v-model.trim="token" autofocus @focus="tokenIsValid = null">
            <button>Submit Token for validity check</button>
            <p v-if="tokenIsValid === false">Your token is not valid.</p>
        </form>
        <fetch-user v-if="tokenIsValid" :token="updateToken"></fetch-user>
        <th class="expander"></th>
    </div>
</template>


<script>
    import FetchUser from './FetchUser.vue';
    export default {

        components: {
            FetchUser
        },
        data() {
            return {
                token: '',
                tokenUrl: 'https://public.totalexpert.net/v1/token',
                tokenIsValid: null,
                access_token: null
            }
        },
        computed:{
            updateToken: function(){
                console.log("in comp: " + this.access_token);
                return this.access_token
            }
        },
        methods: {
            submitToken() {
                this.tokenIsValid = null;

                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Basic " + this.token);
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                var urlencoded = new URLSearchParams();
                urlencoded.append("grant_type", "client_credentials");

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: 'follow'
                };

                fetch("https://public.totalexpert.net/v1/token", requestOptions)
                    .then(response => response.text())
                    .then((result) => {
                        var results = JSON.parse(result);
                        this.access_token = (results.access_token);
                        this.tokenIsValid = true;
                    })
                    .catch(error => {
                        console.log('error', error);
                        this.tokenIsValid = false;
                    
                    //CUSTOM ERROR ABOUT A BAD LOGIN GOES HERE
                    });

            }
        }
    }

</script>

<style scoped>

</style>
