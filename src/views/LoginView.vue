<template>
     <Navbar />
<section class="bg-cover bg-center h-screen" :style="`background-image: url(${fondoImage})`">

    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white sombra -mt-10">
          <img class="w-36 h-26 mr-2" src="@/assets/images/ucb/logo3.png
          " alt="logo">
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white flex justify-center">
                 Inicia sesión con tu cuenta
              </h1>
              <a href="#" class="flex justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-36 h-26 mr-2" src="@/assets/images/ucb/logo5.png
          " alt="logo">
      </a>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Correo electronico</label>
                      <input type="email" name="email" id="email"  v-model="usuario"class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="usuarioa@ucb.edu.bo" >
                  </div>
                  <div>
                      <label for="password"  class="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Contraseña</label>
                      <input type="password" name="password" v-model="contrasenia" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
                  <button type="button" @click="doLogin()" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button>
              </form>
          </div>
      </div>
  </div>
</section>
<Footer />
</template>

<script >
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import fondoImage from '@/assets/images/ucb/fondo.webp';
import Swal from 'sweetalert2';
import { useAuthStore } from '@/stores/admin/loginStore';
export default {
  name: 'LoginView',
  data() {
    return {
      usuario: "",
      contrasenia: "",
      blockTimeLeft: 0,
      fondoImage: fondoImage,
    };
  },
  components: {
    Footer,
    Navbar,
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  computed: {
    isBlocked() {
      return this.authStore.isBlocked;
    },
  },
  watch: {
    isBlocked(newValue) {
      if (newValue) {
        this.startBlockTimer();
      }
    },
  },
  methods: {
    startBlockTimer() {
      this.blockTimeLeft = this.authStore.blockTime;

      const interval = setInterval(() => {
        if (this.blockTimeLeft > 0) {
          this.blockTimeLeft--;
        } else {
          clearInterval(interval);
          this.authStore.unblock();
        }
      }, 1000);
    },
    async doLogin() {
      let loader = this.$loading.show();

      try {
        const credentials = {
          correo: this.usuario,
          contrasenia: this.contrasenia,
        };
        const response = await this.authStore.login(credentials);
        loader.hide();
        if (response) {
          if (response.response.type === 1 && response.response.authToken !== null) {
            this.$router.push({ name: "records" });
          } else {
            throw new Error("Usuario o contraseña incorrectos");
          }
        } else {
          throw new Error("Usuario o contraseña incorrectos");
        }
      } catch (error) {
        loader.hide();
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Usuario o contraseña incorrectos",
        });
      }
    },
  },
};
</script>

<style>
.sombra {
    filter: drop-shadow(4px 4px 4px rgba(0, 5, 74, 0.715));
}
</style>