<template>
<v-app>
  <v-main class="cyan darken-4">
  <v-container fill-height>
        <v-layout row wrap align>
          <v-card
          height="700" text-h4 class="mx-auto my-12 text-center" width="800" outlined elevation="20">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">
                    Cursos
                  </th>
                  <th class="text-center">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="task in tasks" :key="task.Nombre"
                >
                  <td>{{ task.Curso }} </td>
                  <td><v-btn
                      small
                      color="error"
                      dark
                      class="grey  mx-2"
                      v-on:click='deleteTask(task)'
                    >
                      <v-icon dark>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                    
                    </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          </v-card>
        </v-layout>

        <v-layout row wrap align>
          <v-card
          height="300" text-h4 class="mx-auto my-12 text-center" width="400" outlined elevation="20">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          ><br>
            <v-text-field
            class="mx-10"
              v-model='newTask.Nombre'
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="addTask"
            >
              Submit
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset Form
            </v-btn>    
          </v-form>
          </v-card>
        </v-layout>
  </v-container>
  </v-main>
</v-app>
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
            axios.post(this.postURL + '/task/add_course', this.newTask, this.config_request)
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
            axios.post(this.postURL + '/task/delete_course', {Nombre: task.Curso}, this.config_request)
                .then((res) => {                      
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
        axios.post(this.postURL + '/task/get_courses')
            .then(res => { this.tasks = res.data; })
            .catch((error) => { console.log(error) })
    }

}
</script>

<style>   
</style>