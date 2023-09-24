<template lang="">
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link
          :to="{ name: 'transaction.create' }"
          class="btn btn-primary btn-sm rounded shadow mb-3"
          >Add</router-link
        >
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card rounded shadow">
            <div class="card-header">Transaction List</div>
            <div class="card-body">
              <table class="table table-responsive">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(transaction, index) in transaction.data.data"
                    :key="transaction.id"
                  >
                    <td>{{ transaction.title }}</td>
                    <td>{{ transaction.amount ? amountRp(transaction.amount) : '' }}</td>
                    <td>{{ transaction.type }}</td>
                    <td>
                      <div class="btn-group">
                        <router-link
                          :to="{
                            name: 'transaction.edit',
                            params: { id: transaction.id },
                          }"
                          class="btn btn-sm btn-outline-info"
                          >Edit</router-link
                        >
                        <button @click="confirmDelete(transaction.id)" class="btn btn-sm btn-outline-danger">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {{transaction.data.last_page_url}}
              <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><button @click="nextPage" class="page-link">Next</button></li>
  </ul>
</nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import axios from "axios";
import { onMounted, reactive, computed } from "vue";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    //reactive state
    let transaction = reactive({
        data: []
    });

    onMounted(() => {
      fetchData()
    });
    const fetchData = () => {
        axios
        .get("http://127.0.0.1:8000/api/transaksi", { headers })
        .then((result) => {
            console.log(result.data.data);
          transaction.data = result.data.data;
          
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    const amountRp = (angka)=>{
        return angka.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })
    }
    const nextPage = () => {
        axios
        .get(transaction.data.next_page_url, { headers })
        .then((result) => {
            console.log(result.data.data);
          transaction.data = result.data.data;
          
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    const confirmDelete = (id) => {
      const isConfirmed = window.confirm('Are you sure you want to delete this transaction?');
      if (isConfirmed) {
        deleteItem(id);
        
      } else {
        router.push({
          name: 'transaction.index'
        });
      }
    }
    async function deleteItem(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/transaksi/${id}`);
        fetchData(); // Memanggil fetchData lagi setelah penghapusan untuk memperbarui data
        router.push({
          name: 'transaction.index'
        });
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
    console.log(transaction.amount)
    return {
      transaction,
      confirmDelete,
      router,
      amountRp,
      nextPage
    }
  },
};
</script>
