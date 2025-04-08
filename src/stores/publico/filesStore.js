import { defineStore } from 'pinia';
import axios from 'axios';
import RutaApi from '@/assets/rutaApi.js';

export const useFilesStore = defineStore({
    id: 'files',
    state: () => ({
        fileData: [],
        porcentajeCarga: 0,
        link: ''
    }),
    actions: {
        async uploadFile(file, isConverted = false) {
            try {
                // Convert to webp if it's an image file and hasn't been converted yet
                if (file.type.includes('image') && !isConverted) {
                    const webpFile = await this.convertToWebp(file);
                    return await this.uploadFile(webpFile, true);
                }
                //rename file to noticia_{{timestamp}}
                
                const newName = 'estudiante_' + Date.now() + file.name.substring(file.name.lastIndexOf('.'));
                const newFile = new File([file], newName, {
                    type: file.type
                });

                const formData = new FormData();
                formData.append('file', newFile);


                const response = await axios.post(RutaApi + 'files/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: progressEvent => {
                        this.porcentajeCarga = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        console.log(this.porcentajeCarga);
                    }
                });

                console.log(response);

                if (response.status === 200) {
                    this.link = response.data.response.url;
                    return true;
                } else {
                    console.error('La carga del archivo no fue exitosa. Estado:', response.status);
                    return false;
                }
            } catch (error) {
                console.error('Error en la carga del archivo:', error);
                return false;
            }
        },

        convertToWebp(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const img = new Image();
                    img.src = reader.result;
        
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
        
                        // Ajuste del tamaño del canvas
                        //conservar la relación de aspecto de la imagen

                        const aspectRatio = img.width / img.height;
                        canvas.width = 600;
                        canvas.height = 600 / aspectRatio;


        
                        // Dibuja la imagen en el canvas con las dimensiones especificadas

                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        
                        // Convertir el canvas a un blob en formato WebP
                        canvas.toBlob(blob => {
                            if (blob) {
                                // Cambia la extensión del archivo a .webp
                                const newFileName = file.name.replace(/\.[^/.]+$/, ".webp");
                                
                                // Crea un nuevo archivo con el blob en formato WebP
                                const newFile = new File([blob], newFileName, {
                                    type: 'image/webp'
                                });
        
                                // Resuelve la promesa con el nuevo archivo WebP
                                resolve(newFile);
                            } else {
                                // Rechaza la promesa si no se pudo crear el blob
                                reject(new Error('Error al convertir la imagen a WebP.'));
                            }
                        }, 'image/webp');
                    };
        
                    // Manejo de errores al cargar la imagen
                    img.onerror = () => {
                        reject(new Error('Error al cargar la imagen.'));
                    };
                };
        
                // Manejo de errores en la lectura del archivo
                reader.onerror = error => reject(error);
            });
        }
        
    }
});
