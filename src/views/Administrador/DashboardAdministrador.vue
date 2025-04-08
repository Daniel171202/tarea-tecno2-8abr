<template>
  <Navbar />
  <!-- Start Hero -->
  <section
    class="relative table w-full py-36 bg-[url('https://www.experta.com.ar/blogg/wp-content/uploads/sites/2/2019/01/mascotas.jpg')] bg-top bg-no-repeat bg-cover"
  >
    <div class="absolute inset-0 bg-slate-900/70"></div>
    <div class="container">
      <div
        class="grid grid-cols-1 text-center mt-10 flex justify-center items-center"
      >
        <h3
          class="text-[4rem] md:leading-snug tracking-wide leading-snug font-medium text-white uppercase"
        >
          Bienvenido al sistema !
        </h3>
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
  <section class="relative -mt-[22px]">
    <!--end container-->
    <div class="container mt-10">
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
    <div
      v-for="(item, index) in dashboard"
      :key="index"
      class="mt-10"
    >
      <div class="flex justify-center px-10 -mt-12">
        <img
          class="h-42 w-42 bg-white p-2"
          :src="item"
          alt=""
        />
      </div>
    </div>
  </div>
</div>

    <!--end container-->
  </section>
 
</template>

<script>
import Navbar from "@/components/administrador/NavbarAdministrador.vue";
import { useEstudiatesAdminStore } from "@/stores/admin/estudiantesAdminStore";
import Swal from "sweetalert2";
export default {
  components: {
    Navbar,
  },
  data() {
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
      dashboard: [
        "https://cdn-icons-png.flaticon.com/512/8899/8899687.png",
        "https://cdn-icons-png.flaticon.com/512/2172/2172225.png",
        "https://cdn-icons-png.flaticon.com/512/6821/6821002.png",
        
        "https://cdn-icons-png.flaticon.com/512/4702/4702995.png",
        "https://cdn-icons-png.flaticon.com/512/5716/5716501.png",
        "https://images.icon-icons.com/2899/PNG/512/dashboard_icon_182989.png",
      ],
    };
  },
  async mounted() {
    await this.ObtenerEstudiantes();
  },
  setup() {
    const estudiantesAdminStore = useEstudiatesAdminStore();
    return {
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

      return;
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
          let response = await this.estudiantesAdminStore.deleteEstudiante(
            item.id
          );
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
      this.selectedStudent.imagenUrl = URL.createObjectURL(
        event.target.files[0]
      );
    },
    async ObtenerEstudiantes() {
      let loader = this.$loading.show();

      this.Estudiantes = await this.estudiantesAdminStore.getEstudiantes();

      loader.hide();

      if (this.Estudiantes == null) {
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
