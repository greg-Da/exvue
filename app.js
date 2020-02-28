var todos = new Vue({
    el: "#todos",
    data: {
        taches: [
            {id: 1, content: "tache1", completed: false},
            {id: 2, content: "tache2", completed: false},
        ],
        newtache: "",


    },
    methods:{
        add: function(){
            this.taches.push({
                id: this.taches[this.taches.length -1].id + 1,
                content: this.newtache,
                completed: false,
            });
            this.newtache="";
        },
        del: function (id) {
            this.taches.splice(id, 1);
        },
        delCompleted: function(){
            let x = 0;
            while(this.taches[x]){
                if(this.taches[x].completed === true){
                    this.taches.splice(x, 1);
                } else {
                    x++;
                }
            }
        }
    },
    computed: {
        sumToDo: function(){
            let sum = 0;
            this.taches.forEach(element => {
                if (element.completed == false) {
                    sum += 1;
                }
            });
            return sum;
        },
        
        allDone: function(){
            let done = false;
            this.taches.forEach(element => {
                if (element.completed === true) {
                    done = true
                }
            });
            return done;
        },

    }
})