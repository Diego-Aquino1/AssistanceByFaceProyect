<template>
<v-app>
    <v-main class="cyan darken-4">
      <div>
      <v-sheet max-width="1000">
        <v-carousel height="340">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-sheet>
      </div>
      <br>
      <div>
      <v-sheet color="white" max-width="1000" height="500" >
        <br>
        <v-card
        height="370" text-h4 class="mx-auto my-12 text-center" width="800" outlined elevation="20">
        <br>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="mx-10 text-center"
          >
            <v-text-field
              v-model='newTask.ASISTENCIA'
              :rules="nameRules"
              label="ASISTENCIA"
              required
            ></v-text-field>

            <v-text-field
              v-model='newTask.Asistencias'
              :rules="nameRules"
              label="Asistencias"
              required
            ></v-text-field>

            <v-text-field
              v-model='newTask.Faltas'
              :rules="nameRules"
              label="Faltas"
              required
            ></v-text-field>

            <v-text-field
              v-model='newTask.Fecha'
              :rules="nameRules"
              label="Fecha"
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
      </v-sheet>
      </div>
      <br>
    </v-main>
</v-app>
</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        tasks: [],
            newTask: {},
            postURL: 'http://127.0.0.1:5000',
            config_request: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        items: [
          {
            src: 'https://live.staticflickr.com/65535/51374382327_9d0adb7113_h.jpg',
          },
          {
            src: 'https://live.staticflickr.com/65535/51375356848_099d4ea705_b.jpg',
          },
          {
            src: 'https://live.staticflickr.com/65535/51374516250_2349593b37_b.jpg',
          },
          {
            src: 'https://live.staticflickr.com/65535/51373687208_a8c7004e18_b.jpg',
          },
        ],
      }
    },
    methods:{
        addTask(){ 
            axios.post(this.postURL + '/task/add_assistance', this.newTask, this.config_request)
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
            axios.post(this.postURL + '/task/delete_assistance', {ID: task.ID}, this.config_request)
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
  }
</script>