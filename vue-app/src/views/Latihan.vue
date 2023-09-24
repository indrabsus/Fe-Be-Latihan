<template>
    <div>
      <p>{{ data.nama }}</p>
      <p>{{ data.mapel }}</p>
      <p>{{ number }}</p>
      <button @click="nambah">Tambah</button>

    </div>
  </template>
  
  <script>
import { reactive, ref } from 'vue';

  export default {
    setup(){
        const data = reactive({
            nama: 'Indra Batara',
            mapel: 'Bahasa Inggris'
        })
        const number = ref(0)
        setInterval(()=>{
          number.value++
        },1000)
        const nambah = () => {
            number.value++
        }
        setTimeout(()=>{
            data.nama = 'Ganti Dong'
            data.mapel = 'Bahasa Apalah Dayaku'
        },2000)
    return {
        data,
        nambah,
        number
    }
    }
  }
  </script>
  