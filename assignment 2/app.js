const app = Vue.createApp({
    data(){
        return{
            outputText: '',
            outputText2: ''
        }
    },
    methods:{
        popit(){
            alert('Hey, yo!');
        },
        output(event){
            this.outputText = event.target.value;
        },
        output2(event){
            this.outputText2 = event.target.value;
        }
    }
});

app.mount('#assignment');