const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            showList: true
            //state: 'Hide List'
        };
    },
    computed:{
        caption(){
            return this.showList ? "Hide List" : "Show List"; //ternary FTW
        }
    },
    methods:{
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleList() {
            this.showList = !this.showList;

        }
    }
    

});

app.mount('#assignment');
