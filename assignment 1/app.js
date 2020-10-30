const app = Vue.createApp({
    data(){
        return{
            name: 'Luke Smith',
            age: "41",
            img: "https://i.pinimg.com/originals/5d/83/7f/5d837f7f4177bbffaa1e3c94204ee2c7.jpg",
            prepop: "VALUE!",
            random: this.rando()
        }
    },
    methods:{
        plus(){
            var old = this.age *1;
            old+=5;
            return old;
        },
        rando(){
            var randNum = Math.random();
            return randNum;
        }
    }
});

app.mount('#assignment');

