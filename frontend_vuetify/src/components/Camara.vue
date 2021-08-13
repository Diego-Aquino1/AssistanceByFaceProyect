<template>
<v-app>
  <v-main class="cyan darken-4">
    <v-sheet
    color="white"
    elevation="20"
    height="700"
    width="1000"
    >
    <v-card-title
        class="d-block text-center mx-auto mb-9"
      >
      ASSISTANCE BY FACE</v-card-title>
    <div id="app" class="web-camera-container">
        <div class="camera-button">
            <v-btn color="grey lighten-5" elevation="24" class="d-block text-center mx-auto mb-9" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
                <span v-if="!isCameraOpen">Start Camera</span>
                <span v-else>Close Camera</span>
            </v-btn>
        </div>
        
        
        <div v-if="isCameraOpen" v-show="!isLoading" class="d-block text-center mx-auto mb-9" :class="{ 'flash' : isShotPhoto }">
            
            <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
            
            <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>
            
            <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
        </div>

        <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
            <v-btn color="white" elevation="15" fab class="d-block text-center mx-auto mb-9" @click="takePhoto">
            <v-icon dark>
                mdi-camera
            </v-icon>
            </v-btn>
        </div>
        
        <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
            <a id="downloadPhoto" download="my-photo.jpg" class="d-block text-center mx-auto mb-9" role="button" @click="downloadImage">
            Download
            </a>
        </div>
        </div>
        </v-sheet>
  </v-main>
</v-app>
</template>

<script>

export default {
    data() {
        return {
        isCameraOpen: false,
        isPhotoTaken: false,
        isShotPhoto: false,
        isLoading: false,
        link: '#'
        }
    },
    
    methods: {
        toggleCamera() {
            if(this.isCameraOpen) {
                this.isCameraOpen = false;
                this.isPhotoTaken = false;
                this.isShotPhoto = false;
                this.stopCameraStream();
            } else {
                this.isCameraOpen = true;
                this.createCameraElement();
            }
        },
        
        createCameraElement() {
            this.isLoading = true;
            
            const constraints = (window.constraints = {
                    audio: false,
                    video: true
                });


                navigator.mediaDevices
                    .getUserMedia(constraints)
                    .then(stream => {
            this.isLoading = false;
                        this.$refs.camera.srcObject = stream;
                    })
                    .catch(error => {
            this.isLoading = false;
                        alert("May the browser didn't support or there is some errors.");
                    });
        },
        
        stopCameraStream() {
            let tracks = this.$refs.camera.srcObject.getTracks();

                    tracks.forEach(track => {
                        track.stop();
                    });
        },
        
        takePhoto() {
            if(!this.isPhotoTaken) {
                this.isShotPhoto = true;

                const FLASH_TIMEOUT = 50;

                setTimeout(() => {
                this.isShotPhoto = false;
                }, FLASH_TIMEOUT);
            }
            
            this.isPhotoTaken = !this.isPhotoTaken;
            
            const context = this.$refs.canvas.getContext('2d');
            context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
        },
        
        downloadImage() {
            const download = document.getElementById("downloadPhoto");
            const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
            .replace("image/jpeg", "image/octet-stream");
            download.setAttribute("href", canvas);
        }
    }
}
</script>

