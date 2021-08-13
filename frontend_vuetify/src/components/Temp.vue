
<template>
<div>
  <v-container fill-height>
        <v-layout row wrap align-center>
          <v-flex class="text-xs-center">
            <v-btn>Working...</v-btn>
          </v-flex>
        </v-layout>
  </v-container>

<!--  
    <v-avatar
      color="indigo"
      size="200"
    >
      <span class="white--text headline">Working...</span>
    </v-avatar>
-->
  
</div>
</template>

<script>
import axios from 'axios'

export default{    
    data(){ 
        return { 
            tasks: [],
            newTask: {},
            postURL: 'http://127.0.0.1:5000',
            config_request: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }           
        }
    },
    methods:{
        addTask(){ 
            axios.post(this.postURL + '/task/create_task', this.newTask, this.config_request)
                .then(res => {                                         
                    this.tasks.push(res.data);
                    console.log(res.data)        ;
                })
                .catch((error) => {
                    console.log(error)
                });

            this.newTask = {};
        },
        deleteTask(task){                      
            axios.post(this.postURL + '/task/delete_task', {id:task.id}, this.config_request)
                .then(res => {                      
                    this.tasks.splice(this.tasks.indexOf(task), 1);                    
                })
                .catch((error) => {
                    console.log(error)
                });  
        },
        reset(){                      
            this.newTask = {};
        }
    },
    created(){ 
        axios.post(this.postURL + '/task/get_tasks')
            .then(res => { this.tasks = res.data; })
            .catch((error) => { console.log(error) })
    }

}
</script>

<style>   
</style>