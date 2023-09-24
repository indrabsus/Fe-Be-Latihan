<template>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-8">
          <router-link :to="{ name: 'transaction.index' }" class="btn btn-primary btn-sm rounded shadow mb-3">Back</router-link>
          <div class="card rounded shadow">
            <div class="card-header">
              Edit Transaction
            </div>
            <div class="card-body">
              <form @submit.prevent="update()">
                <div class="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input type="text" class="form-control" v-model="transaction.title" id="title">
                  <div v-if="validation.title" class="text-danger">
                    {{ validation.title[0] }}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="amount" class="form-label">Amount</label>
                  <input type="text" class="form-control" v-model="transaction.amount" id="amount">
                  <div v-if="validation.amount" class="text-danger">
                    {{ validation.amount[0] }}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="type" class="form-label">Type</label>
                  <select class="form-select" v-model="transaction.type" id="type">
                    <option value="expense">Expense</option>
                    <option value="revenue">Revenue</option>
                  </select>
                  <div v-if="validation.type" class="text-danger">
                    {{ validation.type[0] }}
                  </div>
                </div>
                <button class="btn btn-outline-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';
  
  export default {
    setup() {
      const transaction = reactive({
        title: '',
        amount: '',
        type: ''
      });
  
      const validation = ref([]);
  
      const router = useRouter();
      const route = useRoute();
  
      async function fetchData() {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/transaksi/${route.params.id}`);
          console.log(response)
          transaction.title = response.data.data.title;
          transaction.amount = response.data.data.amount;
          transaction.type = response.data.data.type;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      onMounted(() => {
        fetchData();
      });
  
      function update() {
        axios
          .put(`http://127.0.0.1:8000/api/transaksi/${route.params.id}`, transaction)
          .then(() => {
            router.push({
              name: 'transaction.index'
            });
          })
          .catch((err) => {
            validation.value = err.response.data.errors;
          });
      }
  
      return {
        transaction,
        validation,
        router,
        update
      };
    }
  };
  </script>
  