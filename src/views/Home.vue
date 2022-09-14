<template>
  <v-container>
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Inicie sesión en su cuenta</h4>
                        <h6
                          class="text-center  grey--text "
                        >Inicia sesión en tu cuenta por favor</h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           
                          <v-text-field
                            label="Email"
                            name="Email"
                            v-model="email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-16"
                          />
                          <v-text-field
                            label="Contraseña"
                            name="password"
                            v-model="password" 
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                           type="password"
                          
                          />
                         
                          <v-btn color="blue" dark block tile  @click="login()">Ingresar</v-btn>
                     
                         <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >O inicia sesión usando</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" class="blue rounded-bl-xl" >
                    <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">¿Aún no tienes una cuenta?</h3>
                        <h6
                          class="text-center"
                        >Vamos a prepararlo todo para que pueda comenzar a crear su primera</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">REGISTRARME</v-btn>
                      </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row >
                    <v-col cols="12" md="6" class="blue rounded-br-xl">
                     <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">Estas realmente Registrado?</h3>
                        <h6
                          class="text-center"
                        >Inicie sesión en su cuenta para que pueda Ingresar <br> Registra tus datos</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Ingresar</v-btn>
                      </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Regístrese para obtener una cuenta</h4>
                        <h6
                          class="text-center  grey--text "
                        >Vamos a prepararlo todo para que pueda comenzar a crear su <br>
                        Cuenta personal</h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="Primer Nombre"
                            name="name"
                            v-model="name"
                            
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="Apellido"
                            name="lastName"
                            v-model="lastName"
                            
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           </v-row>
                          <v-text-field
                            label="Email"
                            name="Email"
                            v-model="email"
                            
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Avatar"
                            name="avatar"
                            v-model="avatar"
                            
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          
                          <v-text-field
                            label="Contraseña"
                            name="password"
                            v-model="password"
                            
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                           type="password"
                          
                          />
                          <v-btn color="blue" dark block tile @click="register()">REGISTRARSE</v-btn>
                     
                         <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >O Registrarte usando </h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';
import Swal from 'sweetalert2';

  export default {
    name: 'HomeView',
  components: {
  },
   data: () => ({
    step: 1,
    name: '',
    lastName: '',
    email: '',
    password: '',
    avatar:'',
      error:false,
      errorMessage:'',
      confirmPassword:'password'
  }),
  methods:{
    login(){
      let json={
      "email":this.email,
      "password":this.password
    };
    axios.post('http://127.0.0.1:8000/api/login',json)
    .then(data=>{
      if(data.data.message==="Unauthorized" || data.data.message==="bad request" ) {
                Swal.fire({
                position: 'center',
                icon: 'error',
                type: 'error',
                title: 'Usuario incorrecto',
                showConfirmButton: false,
                timer: 1500
              })
         
     this.$router.push('/');  
      }else{
             Swal.fire({
                position: 'center',
                icon: 'success',
                type: 'success',
                title: 'Bienvenido',
                showConfirmButton: false,
                timer: 1500
              })
          console.log(data.data.usuario);
             this.$router.push('/index');
      }
      }).catch(e=>{
        console.log(e)
             Swal.fire({
                position: 'center',
                icon: 'error',
                type: 'error',
                title: 'Usuario o contraseña Incorrecto',
                showConfirmButton: false,
                timer: 1500
              })
            this.$router.push('/');
        })
  },
  register(){
    let json={
      "name":this.name,
      "lastName":this.lastName,
      "email":this.email,
      "password":this.password,
      "avatar":this.avatar,

    };
    axios.post('http://127.0.0.1:8000/api/register',json)
    .then(data=>{
      if(data.data.message=="Unauthorized" || data.data.message=="Bad Request") {
           Swal.fire({
                position: 'center',
                icon: 'error',
                type: 'error',
                title: 'Usuario no encontrado',
                showConfirmButton: false,
                timer: 1500
              })
      this.$router.push('/')
      }else{
        Swal.fire({
                position: 'center',
                icon: 'success',
                type: 'success',
                title: 'Usuario Registrado con exito!',
                showConfirmButton: false,
                timer: 1500
              })
        console.log(data.data.user)
        this.$router.push('/')
      }
    })
    .catch(error=>{
        console.log(error)
      Swal.fire({
                position: 'center',
                icon: 'error',
                type: 'error',
                title: 'Usuario Incorecto',
                showConfirmButton: false,
                timer: 1500
              })
        this.$router.push('/');
      });
  } 
  },
  props: {
    source: String
  } 

    
  }
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
