const app = new Vue({

    el: '#app',
    data: {

        todos: [

            {
                text: "Fare la spesa",
                done: false,
            },

            {
                text: "Fare il bucato",
                done: false,
            },

            {
                text: "Fare da mangiare",
                done: false,
            },

        ],

        newTodo: '',
    },

    methods: {

        addTodo(){
            if(this.newTodo !== " "){
                this.todos.push(this.newTodo);
                this.newTodo = "";
            }
        },

        removeTodo(index){
            this.todos.splice(index, 1);
        },

    },
});