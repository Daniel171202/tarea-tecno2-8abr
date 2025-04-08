<template>
      <Navbar />
    <section class="relative lg:mt-24 mt-[74px] pb-16">
        <div class="lg:container container-fluid">
            <div class="profile-banner relative text-transparent">
                <div class="relative shrink-0">
                    <img :src="imageSrc2" class="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700"
                        id="profile-banner" alt="">
                    <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                </div>
            </div>

            <div class="md:flex mx-4 -mt-12">
    <div class="md:w-full">
        <div class="relative flex items-end">
            <div class="profile-pic text-center">
                <input id="pro-img" accept="image/*" name="profile-image" type="file" class="hidden" @change="loadFile($event)" />
                <div>
                    <div class="relative w-28 h-28 mx-auto">
                        <img :src="imageSrc"
                            class="w-full h-full object-cover rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                            id="profile-image" alt="">
                        <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                    </div>
                </div>
            </div>
            <div class="ms-4">
                <h5 class="text-lg font-semibold">{{ Estudiante.nombre }}</h5>
                <p class="text-slate-400">{{ RegistroCarrera }}</p>
            </div>
        </div>
    </div>
</div>

        </div>
        <div class="container mt-16">
            <div class="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-12">
                    <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 class="text-lg font-semibold mb-4">Datos personales :</h5>
                        <form>
                            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-4">
                                <div class="lg:col-span-6">
                                    <label class="form-label font-medium">Nombres : <span
                                            class="text-red-600">*</span></label>
                                    <input v-model="Nombres" type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                                        placeholder="Nombres" id="firstname" name="name">
                                </div>

                                <div class="lg:col-span-6">
                                    <label class="form-label font-medium">Apellidos : <span
                                            class="text-red-600">*</span></label>
                                    <input v-model="Apellido" type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                                        placeholder="Apellidos" id="lastname" name="name">
                                </div>

                                <div class="lg:col-span-6">
                                    <label class="form-label font-medium">Tu correo : <span
                                            class="text-red-600">*</span></label>
                                    <input type="email"
                                        class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                                        placeholder="Email" name="email" v-model="Estudiante.email">
                                </div>

                                <div class="lg:col-span-6">
                                    <label class="form-label font-medium" for="birthday">Fecha de nacimiento :</label>
                                    <input type="date" id="birthday" name="fechaNacimiento"
                                        class="form-input border border-slate-100 dark:border-slate-800 mt-2" v-model="Estudiante.fechaNacimiento">
                                </div>

                                <div class="lg:col-span-4">
                                    <label class="form-label font-medium">Ciudad de nacimiento :</label>
                                    <input type="text"
                                        class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                                        placeholder="La Paz" name="cuidad de nacimiento" v-model="Estudiante.ciudadNacimiento">
                                </div>

                                <div class="lg:col-span-4">
                                    <label class="form-label font-medium">Carrera:</label>
                                    <select v-model="Estudiante.carrera" name="carrera"
                                        class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-2">
                                        <option v-for="carrera in carreras" :key="carrera.nombre" :value="carrera.nombre">
                                            {{ carrera.nombre }}
                                        </option>
                                    </select>
                                </div>

                                <div class="lg:col-span-4">
                                    <label class="form-label font-medium">Número de celular :</label>
                                    <input type="number"
                                        class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                                        placeholder="77777761" name="number" v-model="Estudiante.telefono">
                                </div>
                            </div>
                            <div class="w-full flex justify-end">
                                
                            <input type="submit" id="submit" name="send"
                                class="btn border-blue-900 bg-blue-900 hover:bg-blue-700 text-white rounded-md mt-5 cursor-pointer flex justify-end"
                                @click.prevent="RegistrarEstudiante"
                                value="Registrarse">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Swal from "sweetalert2";
import { useEstudiantesStore } from '@/stores/publico/formularioStore';
import { useFilesStore } from '@/stores/publico/filesStore';
export default {
    components: {
    Footer,
    Navbar,
  },
  setup() {
    const RegistrarFormulario = useEstudiantesStore();
    const filesStore = useFilesStore();

    return { RegistrarFormulario, filesStore };
  },
    data() {
        return {
            imageSrc: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
            image: '',
            imageSrc2: 'https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/SIS.png?resize=626%2C399&ssl=1',
            image2: '',
            Nombres: '',
            Apellido: '',
            Estudiante: {
                nombre: '',
                email: '',
                telefono: '',
                fechaNacimiento: '',
                ciudadNacimiento: '',
                carrera: '',
                imagenUrl: ''
            },
            carreras: [
                { nombre: 'Ing. Sistemas', imagen: 'https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/SIS.png?resize=626%2C399&ssl=1' },
                { nombre: 'Psicopedagogía', imagen: 'https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/PSP.png?resize=626%2C398&ssl=1' },
                { nombre: 'Derecho', imagen: 'https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/DER.png?resize=626%2C398&ssl=1' },
                { nombre: 'Administración', imagen: 'https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/ADM.png?resize=626%2C398&ssl=1' },
                { nombre: 'Contaduría Pública', imagen: 'https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/04/CPA.png?resize=626%2C398&ssl=1' }
            ]
        };
    },
    computed: {
        RegistroCarrera() {
            return `${this.Estudiante.carrera}`;
        }
    },
    methods: {
        loadFile(event) {
            const file = event.target.files[0];

        if (file) {
            this.imageSrc = URL.createObjectURL(file);
            // Muestra el cargador (opcional)
            let loader = this.$loading ? this.$loading.show() : null;

            // Llama al store para subir la imagen
            this.filesStore.uploadFile(file)
            .then((success) => {
                if (success) {
                // Asigna la URL devuelta por el store
                this.Estudiante.imagenUrl = this.filesStore.link;
                if (loader) loader.hide();  // Oculta el cargador (si está configurado)
                } else {
                console.error("Error subiendo la imagen principal");
                if (loader) loader.hide();  // Oculta el cargador en caso de error
                }
            })
            .catch((error) => {
                console.error("Error subiendo la imagen", error);
                if (loader) loader.hide();  // Oculta el cargador en caso de error
            });
        }
        },
        updateBackground(carreraSeleccionada) {
            const carrera = this.carreras.find(c => c.nombre === carreraSeleccionada);
            if (carrera) {
                this.imageSrc2 = carrera.imagen;
            }
        },
        async RegistrarEstudiante(){
            // validacines para los campos
            // Validación para el correo del aplicante
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar correos
            const numberRegex = /^[0-9]+$/; // Regex para validar que sea solo números

            if (this.Nombres === "") {
                toast.error("El nombre del estudiante es requerido");
                return;
            }

            if (this.Apellido === "") {
                toast.error("El apellido del estudiante es requerido");
                return;
            }

            if (this.Estudiante.telefono === "") {
                toast.error("El número de celular es requerido");
                return;
            }

            if (this.Estudiante.fechaNacimiento === "") {
                toast.error("La fecha de nacimiento es requerida");
                return;
            }

            if (this.Estudiante.ciudadNacimiento === "") {
                toast.error("La ciudad de nacimiento es requerida");
                return;
            }

            if (this.Estudiante.carrera === "") {
                toast.error("La carrera es requerida");
                return;
            }

            if (!emailRegex.test(this.Estudiante.email)) {
                toast.error("El correo del estudiante no es válido");
                return;
            }

            if (!numberRegex.test(this.Estudiante.telefono)) {
                toast.error("El número de celular no es válido");
                return;
            }

            let loader = this.$loading ? this.$loading.show() : null;
            const response = await this.RegistrarFormulario.postEstudiante(
                this.Estudiante
            );

            if (response) {
                Swal.fire({
                icon: "success",
                title: "Formulario del estudiate subido",
                text: "El formulario del estudiante se subió correctamente",
                });
                this.Nombres = "";
                this.Apellido = "";
                this.Estudiante.email = "";
                this.Estudiante.telefono = "";
                this.Estudiante.fechaNacimiento = "";
                this.Estudiante.ciudadNacimiento = "";
                this.Estudiante.carrera = "";
                this.Estudiante.imagenUrl = "";

            } else {
                console.error("Error subiendo el formulario");
                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al subir el formulario del estudiante",
                });
            }
            console.log(response);
            console.log(this.Estudiante);
            console.log(this.nombre);

            if (loader) loader.hide();

            return;
        },
    },
    watch: {
        'Estudiante.carrera'(nuevoValor) {
            this.updateBackground(nuevoValor);
        },
        Nombres(newVal) {
            this.Estudiante.nombre = `${newVal} ${this.Apellido}`;
        },
        Apellido(newVal) {
            this.Estudiante.nombre = `${this.Nombres} ${newVal}`;
        }
    }
    
};
</script>
