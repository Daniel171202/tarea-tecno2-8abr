import { defineStore } from 'pinia';
import axios from 'axios';
import  RutaApi  from '@/assets/rutaApi.js';



export const useEstudiatesAdminStore = defineStore('estudiantesAdmin', {
    state: () => ({
        estudiantes: [],
        estudiante: null,
        loading: false,
        error: null,
        selectedEstudianteId: 0,
    }),
    actions: {
        async getEstudiantes() {
            this.loading = true;
            var response = null;
            try {
                 response = await axios.get(`${RutaApi}estudiantes`);
                this.noticias = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
                if(response.data.code == "200"){
                    return response.data.response;
                }else{
                    return null
                }
            }
        },
        async getEstudiante(id) {
            this.loading = true;
            var response = null;
            try {
                response = await axios.get(`${RutaApi}estudiantes/${id}`);
                this.noticia = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
                if(response.data.code == "200"){
                    return response.data.response;
                }else{
                    return null
                }
            }
        },


        async putEstudiante(data) {
            this.loading = true;
            var response = null;
            try {
            
                response = await axios.put(`${RutaApi}estudiantes`, data);
                this.estudiante = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
                if(response.data.code == "200"){
                    return response.data.response;
                }else{
                    return null
                }
            }
        },
        async deleteEstudiante(id) {
            this.loading = true;
            var response = null;
            try {
                response = await axios.delete(`${RutaApi}estudiantes/${id}`);
                this.noticia = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
                if(response.data.code == "200"){
                    return true;
                }else{
                    return null
                }
            }

        }
    }
});