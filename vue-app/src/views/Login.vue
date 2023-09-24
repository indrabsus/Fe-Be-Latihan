
<template>
  <div class="login mt-5">
    <h2>Login</h2>
    <hr>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input class="form-control" type="text" id="email" v-model="email" />
        <div v-if="validation.email" class="text-danger">
          {{validation.email[0]}}
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input class="form-control" type="password" id="password" v-model="password" />
        <div v-if="validation.password" class="text-danger">
          {{validation.password[0]}}
        </div>
      </div>
      <div>
        <button type="submit" class="btn btn-primary rounded mt-2">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import {useStore} from 'vuex'

export default {
  setup() {
    // State untuk menyimpan email dan password
    const email = ref('');
    const password = ref('');

    const router = useRouter()
    const validation = ref([])

    const store = useStore()
    const isLoggedIn = computed(() => store.state.isLoggedIn);

    // Fungsi untuk melakukan login
    const login = () => {
      // Data login
      const userData = {
        email: email.value,
        password: password.value,
      };

      // Lakukan permintaan login ke server menggunakan Axios
      axios
        .post('http://127.0.0.1:8000/api/login', userData) // Ganti dengan URL yang sesuai
        .then((response) => {
          // Handle respons dari server setelah login berhasil
          localStorage.setItem('token', response.data.token);
          store.commit('setToken', response.data.token);

          // Anda dapat mengarahkan pengguna ke halaman lain atau mengatur state otentikasi di sini
          router.push({
                    name: 'transaction.index'
                })
        })
        .catch((error) => {
          // Handle kesalahan saat login
          console.error('Kesalahan saat login:', error);

          // Mungkin Anda ingin menampilkan pesan kesalahan kepada pengguna
          console.log(error.response.data.errors)
          validation.value = error.response.data.errors
        });
    };

    return {
      email,
      password,
      login,
      validation,
      isLoggedIn
    };
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.login h2 {
  margin-bottom: 10px;
}
</style>
