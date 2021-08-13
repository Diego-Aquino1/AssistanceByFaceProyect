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
                    Nombres
                  </th>
                  <th class="text-center">
                    Apellidos
                  </th>
                  <th class="text-center">
                    Email
                  </th>
                  <th class="text-center">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="task in tasks" :key="task"
                >
                  <td>{{ task.Nombres }} </td>
                  <td>{{ task.Apellidos }} </td>
                  <td>{{ task.Correo }} </td>
                  <td><v-btn
                      small
                      color="error"
                      dark
                      class="grey  mx-2"
                      v-on:click='deleteTask(task)'
                      @click="messages--"
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
          height="600" text-h4 class="mx-auto my-12 text-center" width="400" outlined elevation="20">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <br>
            <v-text-field
              class="mx-10"
              v-model='newTask.Nombres'
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              class="mx-10"
              v-model='newTask.Apellidos'
              :rules="nameRules"
              label="Apellido"
              required
            ></v-text-field>

            <v-text-field
              class="mx-10"
              v-model='newTask.Correo'
              :rules="nameRules"
              label="Email"
              required
            ></v-text-field>

            <v-text-field
              class="mx-10"
              v-model='newTask.Ciudad'
              :rules="nameRules"
              label="Ciudad"
              required
            ></v-text-field>

            <v-text-field
              class="mx-10"
              v-model='newTask.Foto'
              :rules="nameRules"
              label="Foto"
              required
            ></v-text-field>
            <br>
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
            axios.post(this.postURL + '/task/add_student', this.newTask, this.config_request)
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
            axios.post(this.postURL + '/task/delete_student', {CUI: task.CUI}, this.config_request)
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
        axios.post(this.postURL + '/task/get_students')
            .then(res => { this.tasks = res.data; })
            .catch((error) => { console.log(error) })
    }

}
</script>

<style>   
</style>