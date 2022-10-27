const { createApp } = Vue;

createApp ({

    data(){

        return {
            
            singleTask: {

                name: "",
                isDone: false

            },
            
            tasks: [ 
                {
                    name: "Task One",
                    isDone: false
                },

                {
                    name: "Task Two",
                    isDone: true
                },

                {
                    name: "Task Three",
                    isDone: false
                },

                {
                    name: "Task Four",
                    isDone: true
                }


            ]
            
        }
    },

    methods : {

        removeTaskFromTasks : function(index) {

            this.tasks.splice(index, 1);

        },

        changeDoneStatus : function(index) {

            this.tasks[index].isDone = !this.tasks[index].isDone;

        },

        addNewTask: function() {

            this.tasks.push({...this.singleTask});

        } 

    }

}).mount("#app")
