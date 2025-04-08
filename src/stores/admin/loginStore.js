import { defineStore } from 'pinia';
import axios from 'axios';
import Cookies from 'js-cookie';
import  RutaApi  from '@/assets/rutaApi.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authToken: Cookies.get('authToken') || null,
        refreshToken: Cookies.get('refreshToken') || null,
        user: null,
        type:null,
        idUser:null,
        isBlocked: false,
        attemps: 0,
        blockTime: 10,

    }),
    actions: {
        unblock(){
            this.isBlocked = false;
            this.attemps = 0;
        },

        async register(credentials) {
            try {
                const response = await axios.post(`${RutaApi}auth/register`, 
                    credentials,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response.status);
                if(response.status === 200){
                    this.isBlocked = false;
                    this.attemps = 0;
                }
                
                console.log(response);
                
                this.authToken = response.data.token;
                //this.refreshToken = response.data.response.refreshToken;
                Cookies.set('authToken', this.authToken);
                //Cookies.set('refreshToken', this.refreshToken);
                //Cookies.set('idUser', response.data.response.idUser);
                //Cookies.set('type', response.data.response.type);
                //this.type = response.data.response.type;
                //this.idUser = response.data.response.idUser;
                return response.data;
            } catch (error) {
                console.error('Error during login:', error);
                return error.response;
            }
        },
        async login(credentials) {
            try {
                const credentialAux ={
                    username: credentials.correo,
                    password: credentials.contrasenia,
                }
                const response = await axios.post(`${RutaApi}auth/login`, 
                    credentialAux,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response.status);
                if(response.status === 200){
                    this.isBlocked = false;
                    this.attemps = 0;
                }
                
                console.log(response);
                
                this.authToken = response.data.token;
                //this.refreshToken = response.data.response.refreshToken;
                Cookies.set('authToken', this.authToken);
                //Cookies.set('refreshToken', this.refreshToken);
                //Cookies.set('idUser', response.data.response.idUser);
                //Cookies.set('type', response.data.response.type);
                //this.type = response.data.response.type;
                //this.idUser = response.data.response.idUser;
                return response.data;
            } catch (error) {
                console.error('Error during login:', error);
                return error.response;
            }
        },

        async logout() {
            this.authToken = null;
            this.refreshToken = null;
            this.user = null;
            this.type = null;
            this.idUser = null;
            Cookies.remove('authToken');
            Cookies.remove('refreshToken');
            Cookies.remove('idUser');
            Cookies.remove('type');
            Cookies.remove('user');



        }

    },
});
