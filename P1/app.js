const app = Vue.createApp({
    data() {
        return {
            courseGoal: '<b>Yay Vue!</b><br>And stuff!',
            courseGoalA: 'Finish the course and do Vue!',
            coarseGoalB: 'Master Vue and make awesome things',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods:{
        outputGoal(){
            const randNum = Math.random();
            if(randNum > 0.5){
                return this.courseGoalA;
            }
            else{
                return this.coarseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
