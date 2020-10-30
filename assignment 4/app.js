const app = Vue.createApp({
    data(){
        return{
            userClass: '',
            vis: true,
            bgcolors: ''
        }
    },
    watched:{
        
    },
    
    methods:{
        toggleVis(){
            this.vis = !this.vis;
        }
    },
    computed:{
        assignClass(){
            return {
                user1: this.userClass === 'user1',
                user2: this.userClass === 'user2',
                visible: this.vis,
                hidden: !this.vis
            }
        }
    }
});

app.mount('#assignment');