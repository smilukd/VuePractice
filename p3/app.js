const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastName: ''
            //fullname: ''
        };
    },
    computed:{
        fullName(){
            if( this.name === '' || this.lastName === ''){
                return '';
            }
            return this.name + ' ' + this.lastName;
        }
    },
    //watch "watches" the data points specified inside it for changes, and when it detects a change, it executes the 'method' with the same name as the data point that has changed. 
    // name() watches the name data point.
    watch:{
        // whenever name (this.name) changes, this funtion will run.
        //Vue passes the value automatically, all we need to do is accept it as an argument. This could accept a 2nd property, representing the old value. Thats HANDY! name(newVal, oldVal  )
//        name(value){ 
//            if(value ===''){
//                this.fullname = '';
//            }
//            else{
//                this.fullname = value + ' ' + this.lastName;
//            }
//        },
//        lastname(value){
//            if(value ===''){
//                this.fullname = '';
//            }
//            else{
//                this.fullname = this.name + ' ' + value;
//            }
//        }
        counter(value){
            if( value > 50 ){
                const that = this;
                setTimeout( function(){
                    that.counter = 0;
                },2000)
                //this.counter = 0;
            }
        }
    },
    methods: {
        setName(event, lastName) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = '';
        },
        outputFullname(){
            if( this.name === ''){
                return '';
            }
            return this.name + ' ' + "Smith";
        }
    }
});

app.mount('#events');
