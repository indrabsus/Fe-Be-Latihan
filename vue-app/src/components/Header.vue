<template>
<div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

<div class="container">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="d-flex flex-row">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul v-show="isToken" class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{name: 'transaction.index'}" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'transaction.create'}" class="nav-link">Create</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'logout'}" class="nav-link">Logout</router-link>
      </li>
    </ul>
  </div>
</div>
</div>
</nav>
</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    let isToken = null
    const token = localStorage.getItem('token');
    const menu = ()=> {
      if(token){
        status = true
      } else {
        status = false
      }
    }
        
    const store = useStore();
    isToken = computed(() => store.state.isToken);
    console.log('token '+ isToken)
      

    return {
      isToken,
      status,
      menu,
      token
    };
  },
  
  // Jika Anda ingin menjalankan logika saat komponen selesai dibuat
  // uncomment onCreated berikut:
  // onCreated() {
  //   // Lakukan sesuatu saat komponen selesai dibuat
  // }
};
</script>