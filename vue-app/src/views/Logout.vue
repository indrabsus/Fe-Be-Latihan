<template>
    <div>
      <h2>Logging Out...</h2>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {useStore} from 'vuex'

export default {
  setup() {
    const router = useRouter();
    const store = useStore()

    const token = localStorage.getItem('token');
        const headers = {
        Authorization: `Bearer ${token}`,
        };

        console.log(headers);
    const logout = () => {
       const response = axios.post('http://127.0.0.1:8000/api/logout',null,{headers}).then((response)=>{
        console.log('berhasil', response.data);
        localStorage.removeItem('token');
      localStorage.removeItem('isLoggedIn');
      store.commit('setLoggedIn', false)
      router.push('/login');
       })

      // console.log(response.data);
      // Lakukan permintaan logout ke server (backend) di sini.
      // Misalnya, dengan menggunakan Axios atau fetch.
      // Setelah logout, hapus token autentikasi dari localStorage atau sessionStorage.

      
    };

    onMounted(() => {
      // Lakukan permintaan logout ke server (backend).
      // Pastikan Anda menghapus token autentikasi di sini.
      logout();
    });

    return {
      logout,
    };
  },
};
</script>

  