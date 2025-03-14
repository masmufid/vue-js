Vue.createApp({
  data() {
    return {
      enteredValue: '',
      todos: []
    }
  },
  methods: {      
    addTodo() {
      this.todos.push(this.enteredValue);
      this.enteredValue = '';
    }      
  }      
}).mount('#app'); 