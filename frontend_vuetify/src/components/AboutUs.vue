<template>
  <v-app id="inspire">
    <v-main class="cyan darken-4">
      <v-container>
        <v-row >
            <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              elevation="20"
            >
            <p class="text-h4 text--primary text-center">
                <br>Assistance By Face
            </p>

            <v-sheet class="d-block text-center mx-auto mb-9" width="500"><br>
            Somos un grupo de jóvenes estudiantes de la Universidad Nacional de San Agustín
            que busca soluciones ante los problemas actuales como el salto de verificación
            del estudiante al asistir a clases virtuales. Para ello hemos implementado un 
            método innovador y es el uso de Inteligencia Artificial con aprendizaje automático
            que brindan seguridad, precisión y eficacia incomparables. Con ese fin hemos 
            desarrollado esta plataforma que ayudará a los docentes a tener mayor control
            sobre sus estudiantes y tener datos sobre los que no asisten a fin de ayudarlos.

            </v-sheet>

            </v-sheet>
            </v-col>
            <v-col>
              <v-sheet rounded="lg" width="400" height="50" elevation="20">
            <div>
              <p class="text-h4 text--primary text-center">
                Integrantes
              </p>
            </div>
              </v-sheet>
              <v-sheet
                class="text-h5 text-center my-5"
                height="50"
                width="400"
                rounded
                elevation="20"
              > Diego Aquino</v-sheet>
              <v-sheet
                height="60"
                width="400"
                rounded
                elevation="20"
              >
                    <v-list-item>

                    <v-list-item-icon>
                      <v-icon> mdi-instagram </v-icon>
                    </v-list-item-icon>

                    <v-list-item-title link @click="setIGDiego" > Instagram</v-list-item-title>

                    <v-icon>
                      <v-icon> mdi-facebook</v-icon>
                    </v-icon>
              
                    <v-list-item-title link @click="setFBDiego">Facebook</v-list-item-title>
                    </v-list-item>

              </v-sheet>

                <v-sheet
                class="text-h5 text-center my-5"
                height="50"
                width="400"
                rounded
                elevation="20"
              > Gabriel Pacco</v-sheet>
              <v-sheet
                height="60"
                width="400"
                rounded
                elevation="20"
              >
                    <v-list-item>

                    <v-list-item-icon>
                      <v-icon> mdi-instagram </v-icon>
                    </v-list-item-icon>

                    <v-list-item-title link @click="setIGGabriel"> Instagram</v-list-item-title>

                    <v-list-item-icon>
                      <v-icon> mdi-facebook</v-icon>
                    </v-list-item-icon>
              
                    <v-list-item-title link @click="setFBGabriel">Facebook</v-list-item-title>
                    </v-list-item>
              </v-sheet>

                  <v-sheet
                class="text-h5 text-center my-5"
                height="50"
                width="400"
                rounded
                elevation="20"
              > Erick Perez</v-sheet>
              <v-sheet
                height="60"
                width="400"
                rounded
                elevation="20"
              >
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon> mdi-instagram </v-icon>
                    </v-list-item-icon>

                    <v-list-item-title link @click="setIGErick"> Instagram</v-list-item-title>

                    <v-list-item-icon>
                      <v-icon> mdi-facebook</v-icon>
                    </v-list-item-icon>
              
                    <v-list-item-title link @click="setFBErick">Facebook</v-list-item-title>
                </v-list-item>
              </v-sheet>
            </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'Diego Aquino', instagram: "https://www.instagram.com/diego_aquino_7w7/", facebook: 'https://www.facebook.com/Diego.AquinoQ/'},
        { text: 'Gabriel Pacco', instagram: 'https://www.instagram.com/gabriel_pacco_/', facebook: 'https://www.facebook.com/gabriel.pacco.3' },
        { text: 'Kerito Won', instagram: 'https://www.instagram.com/kerito_17/', facebook: 'https://www.facebook.com/profile.php?id=100004004602419' },
      ],
      social: [
        ['Instagram', 'mdi-instagram'],
        ['Facebook', 'mdi-facebook'],
      ],
    }),
    methods:{

      setIGDiego(){
        window.location.href = "https://www.instagram.com/diego_aquino_7w7/";
        },
      setIGGabriel(){
        window.location.href = "https://www.instagram.com/gabriel_pacco_/";
        },
      setIGErick(){
        window.location.href = "https://www.instagram.com/kerito_17/";
        },
      setFBDiego(){
        window.location.href = "https://www.facebook.com/Diego.AquinoQ/";
        },
      setFBGabriel(){
        window.location.href = "https://www.facebook.com/gabriel.pacco.3";
        },
      setFBErick(){
        window.location.href = "https://www.facebook.com/profile.php?id=100004004602419";
        },

    }
  }

</script>

