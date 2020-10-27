const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and do Vue!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods:{
        outputGoal(){
            const randNum = Math.random();
            if(randNum > 0.5){
                return 'Learn Vue'
            }
            else{
                return 'Kick Ass'
            }
        }
    }
});

app.mount('#user-goal');