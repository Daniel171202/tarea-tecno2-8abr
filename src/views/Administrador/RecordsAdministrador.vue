<template>
  <Navbar />
  <!-- Start Hero -->
  <section
    class="relative table w-full py-36 bg-[url('../../assets/images/ucb/fondo.webp')] bg-top bg-no-repeat bg-cover"
  >
    <div class="absolute inset-0 bg-blue-900/90"></div>
    <div class="container">
      <div
        class="grid grid-cols-1 text-center mt-10 flex justify-center items-center"
      >
        <h3
          class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white"
        >
          Registro de los formularios de los estudiantes
        </h3>
        <div class="flex justify-center items-center">
          <img
            class="w-46 h-36"
            src="@/assets/images/ucb/logo3.png
            "
            alt="logo"
          />
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <div class="relative">
    <div
      class="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900"
    >
      <svg
        class="w-full h-auto"
        viewBox="0 0 2880 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
  <!-- End Hero -->
  <section class="relative -mt-[42px] md:pb-24 pb-16">
    <div class="container z-1">
      <div id="reserve-form" class="mx-auto">
        <div
          class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform"
        >
          <!-- Contenedor principal con espacio entre los elementos -->
          <div class="flex flex-wrap gap-4 items-center">
            <!-- Buscador -->
            <div class="flex-1 bg-gray-100 p-2 rounded-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                class="bg-gray-100 outline-none flex-1 p-2"
                type="text"
                placeholder="Nombre del estudiante..."
              />
            </div>

            <!-- Combo box estilizado -->
            <div class="flex-1 relative bg-gray-100 p-4 rounded-lg">
              <select
                class="w-full bg-gray-100 text-gray-700 border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2"
              >
                <option
                  v-for="carrera in carreras"
                  :key="carrera.nombre"
                  :value="carrera.nombre"
                >
                  {{ carrera.nombre }}
                </option>
              </select>
              <!-- Flecha personalizada para el combo box -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 absolute top-1/2 right-4 transform -translate-y-1/2 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <!-- Botón de búsqueda -->
            <div
              class="bg-blue-900 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            >
              <span>Buscar</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--end container-->
    <div class="container mt-10">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div
          v-for="item in Estudiantes"
          :key="item"
          class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800"
        ><div class="absolute justify-start h-12 overflow-hidden p-2">
            <!-- Botón de Editar (lápiz) -->
   <!-- Botón de Editar (lápiz) -->
   <button @click="openEditModal(item)" class="text-white bg-blue-500 hover:bg-blue-400 p-1 w-10  h-10 rounded-full h-[10x] mr-1 drop-shadow-sm">
            <i class="fas fa-pencil-alt"></i>
          </button>
    
    <!-- Botón de Borrar (basurero) -->
    <button @click="EliminarItem(item)" class="text-white bg-red-500 hover:bg-red-400 p-1 w-10 h-10 rounded-full drop-shadow-sm">
      <i class="fas fa-trash"></i>
    </button>
          </div>
          <div class="flex justify-end h-16 overflow-hidden">
            <img
              :src="getCarreraImage(item.carrera)"
              class="w-[100px] r-6 object-cover drop-shadow-xl"
              alt="Carrera Background"
            />
          </div>
          
          <div class="flex justify-center px-5 -mt-12">
            <img
              class="h-32 w-32 bg-white p-2 rounded-full"
              :src="item.imagenUrl"
              alt=""
            />
          </div>
          <div class=" ">
            <div class="text-center px-14">
              <h2 class="text-gray-800 text-2xl font-bold">
                {{ item.nombre }}
              </h2>
              <a class="text-gray-400 mt-2 hover:text-blue-500">{{
                item.carrera
              }}</a>
              <ul class="text-start mt-4 jus">
                <li>
                  <span class="font-bold text-blue-900">Correo: </span
                  >{{ item.email }}
                </li>
                <li>
                  <span class="font-bold text-blue-900">Telefono: </span
                  >{{ item.telefono }}
                </li>
                <li>
                  <span class="font-bold text-blue-900">Ciudad: </span>
                  {{ item.ciudadNacimiento }}
                </li>
                <li>
                  <span class="font-bold text-blue-900"
                    >Fecha de nacimientos:
                  </span>
                  {{ item.fechaNacimiento }}
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
    <div class="bg-white p-6 rounded-lg w-1/3">
      <h2 class="text-xl font-bold mb-4">Editar Información del Estudiante</h2>
    
      <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">

                        <h5 class="text-lg font-semibold mb-4">Datos personales :</h5>
                        <div class="profile-pic text-center mt-6">
                <input id="pro-img" name="profile-image" type="file" class="hidden" @change="loadFile" />
                <div>
                    <div class="relative w-28 h-28 mx-auto">
                        <img :src="selectedStudent.imagenUrl"
                            class="w-full h-full object-cover rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                            id="profile-image" alt="">
                        <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                    </div>
                </div>
            </div>
                        <form>
                            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-4">
                                <div class="lg:col-span-12">
                                    <label class="form-label font-medium">Nombre completo : <span
                                            class="text-red-600">*</span></label>
                                    <input v-model="selectedStudent.nombre" type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                                        placeholder="Nombres" id="firstname" name="name">
                                </div>


                                <div class="lg:col-span-12">
                                    <label class="form-label font-medium">Tu correo : <span
                                            class="text-red-600">*</span></label>
                                    <input type="email"
                                        class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                                        placeholder="Email" name="email" v-model="selectedStudent.email"> 
                                </div>

                                <div class="lg:col-span-6">
                                    <label class="form-label font-medium" for="birthday">Fecha de nacimiento :</label>
                                    <input type="date" id="birthday" name="fechaNacimiento" v-model="selectedStudent.fechaNacimiento"
                                        class="form-input border border-slate-100 dark:border-slate-800 mt-2"   >
                                </div>

                               

                                <div class="lg:col-span-6">
                                    <label class="form-label font-medium">Carrera:</label>
                                    <select v-model="selectedStudent.carrera" name="carrera"
                                        class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-2">
                                        <option v-for="carrera in carreras" :key="carrera.nombre" :value="carrera.nombre">
                                            {{ carrera.nombre }}
                                        </option>
                                    </select>
                                </div>
                                <div class="lg:col-span-6">
                                    <label class="form-label font-medium">Ciudad de nacimiento :</label>
                                    <input type="CiudadNacimiento"
                                        class="form-input border border-slate-100 dark:border-slate-800 mt-2"   v-model="selectedStudent.ciudadNacimiento"
                                        placeholder="La Paz" name=" La Paz">
                                </div>
                                <div class="lg:col-span-6">
                                    <label class="form-label font-medium">Número de celular :</label>
                                    <input type="number"
                                        class="form-input border border-slate-100 dark:border-slate-800 mt-2" v-model="selectedStudent.telefono"
                                        placeholder="77777761" name="number">
                                </div>
                            </div>
                
                        </form>
                    </div>

      <div class="flex justify-end space-x-2 mt-2">
        <button @click="closeEditModal" class="bg-gray-400 text-white px-4 py-2 rounded">Cancelar</button>
        <button @click="saveChanges" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/administrador/NavbarAdministrador.vue";
import { useEstudiatesAdminStore } from "@/stores/admin/estudiantesAdminStore";
import Swal from "sweetalert2";
export default {
  components: {
    Navbar,
  },
  data(){
    return {
      Estudiantes: [],
      estudianteSelected: null,
      showModal: false,
      selectedStudent: {},
      carreras: [
        { nombre: "Todas las carreras", imagen: "" },
        {
          nombre: "Ing. de Sistemas",
          imagen:
            "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/SIS.png?resize=626%2C399&ssl=1",
        },
        {
          nombre: "Psicopedagogía",
          imagen:
            "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/PSP.png?resize=626%2C398&ssl=1",
        },
        {
          nombre: "Derecho",
          imagen:
            "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/DER.png?resize=626%2C398&ssl=1",
        },
        {
          nombre: "Administración",
          imagen:
            "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/ADM.png?resize=626%2C398&ssl=1",
        },
        {
          nombre: "Contaduría Pública",
          imagen:
            "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/CPA.png?resize=626%2C398&ssl=1",
        },
      ],
    };

  },
  async mounted() {
    await this.ObtenerEstudiantes();
  },
  setup(){
    const estudiantesAdminStore = useEstudiatesAdminStore();
    return{
      estudiantesAdminStore,
    };

  },
  methods: {
    getCarreraImage(carrera) {
      const carreraFound = this.carreras.find(
        (item) => item.nombre === carrera
      );
      return carreraFound ? carreraFound.imagen : ""; // Retorna la imagen correspondiente, o vacío si no se encuentra
    },
    openEditModal(student) {
      this.selectedStudent = { ...student };
      this.showModal = true;
    },
    closeEditModal() {
      this.showModal = false;
    },
    async saveChanges() {
      this.showModal = false;
      // Lógica para guardar los cambios en el estudiante
      let loader = this.$loading ? this.$loading.show() : null;
      const response = await this.estudiantesAdminStore.putEstudiante(
        this.selectedStudent
      );
      console.log("response", response);
      if (response) {
        this.$emit("close");
        Swal.fire({
          icon: "success",
          title: "Estudiante actualizado",
          text: "El estudiante ha sido actualizado correctamente",
        });
        this.ObtenerEstudiantes();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo actualizar el estudiante",
        });
      }
      if (loader) loader.hide();

      return

    },
    async EliminarItem(item) {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, borrar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        let loader = this.$loading?.show(); // Usa ? en caso de que no esté definido

        try {
          console.log("Eliminando estudiante", item);
          console.log("Eliminando estudiante", item.id);
          let response = await this.estudiantesAdminStore.deleteEstudiante(item.id);
          loader?.hide(); // Oculta el loader si está definido

          if (response) {
            await Swal.fire({
              icon: "success",
              title: "Estudiante eliminado",
              text: "El estudiante ha sido eliminado correctamente",
            });
            this.ObtenerEstudiantes();
          } else {
            throw new Error("No se pudo eliminar el estudiante");
          }
        } catch (error) {
          loader?.hide();
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo eliminar el estudiante",
          });
        }
      }
    },
    loadFile(event) {
            this.image = document.getElementById(event.target.name);
            this.selectedStudent.imagenUrl = URL.createObjectURL(event.target.files[0]);
        },
    async ObtenerEstudiantes() {
      let loader = this.$loading.show();
      
      this.Estudiantes = await this.estudiantesAdminStore.getEstudiantes();

      loader.hide();

      if(this.Estudiantes == null){
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo cargar los estudiantes",
        });
        
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
