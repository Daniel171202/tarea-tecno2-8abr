import { defineStore } from 'pinia';
import axios from 'axios';
import RutaApi from '@/assets/rutaApi.js';

export const useEstudiantesStore = defineStore('estudiantes', {
    state: () => ({
        estudiantes: [],
        estudiante: null,
        loading: false,  // Asegúrate de tener esta propiedad definida
        error: null,  // Agregando una propiedad para almacenar el error
    }),
    actions: {
        async postEstudiante(data) {
            this.loading = true; // Indicamos que la carga está en progreso
            let response = null;
            try {
                response = await axios.post(`${RutaApi}estudiantes`, data);
                
                // Verificamos que la respuesta y los datos existan
                if (response && response.data) {
                    // Validamos si la respuesta tiene el código 200
                    if (response.data.code === "200") {
                        this.estudiante = response.data.response;
                        return response.data.response;
                    } else {
                        // Si el código no es 200, podemos retornar un error o null
                        console.error("Error en la respuesta del servidor:", response.data);
                        return null;
                    }
                } else {
                    console.error("La respuesta no contiene datos válidos:", response);
                    return null;
                }
            } catch (error) {
                // Mejor manejo del error con más detalles
                console.error("Error al hacer la solicitud:", error);
                this.error = error;
                return null;
            } finally {
                this.loading = false; // Indicamos que la carga ha finalizado
            }
        }
    }
});
