<template lang="">
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{name: 'transaction.index'}"
                class="btn btn-primary btn-sm rounded shadow mb-3">Back</router-link>
                <div class="card rounded shadow">
                    <div class="card-header">
                        Create Transaction
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="" class="form-label">Title</label>
                                <input type="text" class="form-control" v-model="transaction.title">
                                <div v-if="validation.title" class="text-danger">
                                    {{validation.title[0]}}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Amount</label>
                                <input type="text" class="form-control" v-model="transaction.amount">
                                <div v-if="validation.amount" class="text-danger">
                                    {{validation.amount[0]}}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Type</label>
                                <select class="form-select" v-model="transaction.type">
                                    <option value="expense">Expense</option>
                                    <option value="revenue">Revenue</option>
                                </select>
                                <div v-if="validation.type" class="text-danger">
                                    {{validation.type[0]}}
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
import { reactive,ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default{
    setup(){
        const transaction = reactive({
            title: '',
            amount: '',
            type: ''
        })

        const validation = ref([])

        const router = useRouter()

        function store(){
            axios.post('http://127.0.0.1:8000/api/transaksi',
            transaction
            ).then(() => {
                router.push({
                    name: 'transaction.index'
                })
                }).catch((err) => {
                    validation.value = err.response.data.errors
            })
        }
        return {
            transaction,
            validation,
            router,
            store,
        }
    }
}
</script>