const app = Vue.createApp({
  data() {
    return {
      counter: 0,
        name: '',
        confirmedName: ''
    };
  },
    methods:{
        add(num){
            this.counter = this.counter + num;
        },
        subt(num){
            this.counter = this.counter - num;
        },
        setName(event, last ){ // event still recieves the event even though we have an additional parameter, because we sent it with $event in the call.
            this.name = event.target.value + ' ' + last;
        },
        submitForm(){
            //event.preventDefault(); //prevents the page from reloading when the submit button is clicked. This is the 'manual way' of explicitly preventing default behavior
            alert("Yeah buddy");
        },
        confirmName(){
            this.confirmedName = this.name;
        }
    }
});

app.mount('#events');
