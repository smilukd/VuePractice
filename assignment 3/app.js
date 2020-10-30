const app = Vue.createApp({
    data() {
        return {
            val: 0
        };
    },
    computed:{
        result(){
            if (this.val < 37) {
                return "Not there yet!";
            } else if (this.val > 37) {
                return "Too Much!";
            } else {
                return this.val;
            }
        }
    },
    watch: {
//        val(value) {
//            if (value < 37) {
//                this.result = "Not there yet!";
//            } else if (value > 37) {
//                this.result = "Too Much!";
//            } else {
//                this.result = this.val;
//            }
//        },
        result(){
            const that = this;
            setTimeout(function(){
                console.log("timedout");
                that.val = 0;
            },5000);
        }
    },
    methods: {
        add(amt) {
            this.val += amt;
        }
    }
});

app.mount("#assignment");
