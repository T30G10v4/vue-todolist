const { createApp } = Vue;

createApp ({

    data(){

        return {
            
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

        pariDispari : function() {

         

        }

    }

}).mount("#app")
