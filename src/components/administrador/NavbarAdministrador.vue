<template>
   

    <nav class="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="@/assets/images/perros/fentee.png" class="h-10" alt="Flowbite Logo">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-800">Albergue</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

      <button type="button" @click="doLogout()" class="text-white bg-rose-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Cerrar Sesión
      </button>

      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-lg">
         
        </ul>
      </div>
      </div>
    </nav>
    </template>
    <script>
    import { useAuthStore } from "@/stores/admin/loginStore";
  
    export default {
      name: "NavbarCommon",
      components: {},
      setup() {
      const authStore = useAuthStore();
      return { authStore };
    },
  
      computed: {},
      methods: {
        doLogout(){
          this.authStore.logout();
          this.$router.push("/")
        },
        async logoutA() {
          /*Logout*/
          logout();
          $cookies.remove("id");
          $cookies.remove("type");
          $cookies.remove("connect.sid");
          $cookies.remove("username");
          useLoginStore().setLogin(0);
          this.closeMobileMenu();
          await this.$router.push("/");
          await this.$router.go();
          /*Fin del logout*/
        },
      },
    };
    </script>
    