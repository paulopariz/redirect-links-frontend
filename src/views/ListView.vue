<template>
    <div class="container m-auto">

        <header class="flex justify-between items-center mt-16">
            <div class="float-left text-left">
                <h1 class="text-xl text-gray-900 font-semibold">Links de Redirecionamento 🌐 </h1>
                <span class="text-sm text-gray-500">Crie seus links de redirect em poucos passos</span>
            </div>
            <div>
                <label for="my-modal-3" class="btn btn-primary py-2 px-9 text-sm">Criar um Link</label>
            </div>
        </header>

        <!---MODAL CRIAR --->
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <h1 class="block  text-4xl text-slate-900">ADICIONAR</h1>

                <label for="my-modal-3" class="btn btn-sm  absolute right-2 top-2">✕</label>

                <div class="relative py-3 sm:w-96 mx-auto ">
                    <div class="mt-4 bg-white text-left">
                        <div class="h-2 "></div>
                        <div class="px-8 py-6 ">
                            <label class="block font-semibold"> Nome</label>
                            <input v-model="nome" type="text" placeholder="Nome"
                                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md">

                            <label class="block mt-3 font-semibold"> Email </label>
                            <input v-model="email" type="email" placeholder="Email"
                                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md">


                            <div class="flex justify-between items-baseline">

                                <button @click="addLink" class="mt-4 btn py-3 px-6 text-xs rounded-md  ">Salvar</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center mt-12">
            <div class=" border-gray-100 border-t-2 border-r-2 h-screen w-2/5">

                <div class="flex items-center justify-between mt-2 border-b-2 border-gray-100 py-5 pr-8 ">
                    <h1 class="text-primary font-semibold ">00 Links</h1>
                    <p class="font-normal text-gray-500 text-sm">Cliques</p>
                </div>
            </div>

            <div class=" border-gray-100 border-t-2 h-screen w-3/5">
            
            </div>
        </div>

        <div class="overflow-x-auto m-auto mt-6">
            <table class="table w-full text-center">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in listagem" :key="user.id">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                            <router-link class="btn btn-primary" to="/editar/3">Editar</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                listagem: [],
                name: '',
                email: '',
                spiner: 'dgdfgdfgdfg'
            }
        },

        methods: {
            addListagem() {

            },

            addLink() {
                this.spiner
                var data = {
                    name: this.nome,
                    email: this.email
                }
                this.$http.post('adicionar', data).then((response) => {
                    console.log(response)
                })

                this.listagem.push(data)
                this.nome = ''
                this.email = ''

            },
        },

        created() {
            var list = [{
                name: 'paulo',
                email: 'paulo@gmail.com',
                id: '1'
            }]
            this.listagem = list
        },
    }
</script>